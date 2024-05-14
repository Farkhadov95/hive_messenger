import { HStack, Spinner, VStack } from "@chakra-ui/react";
import Chat from "./Chat";
import { useChatStore } from "../store/chatStore";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUserStore } from "../store/userStore";
import { useSocketStore } from "../store/socketStore";
import Chats from "./Chats";
import ChatPlaceholder from "./ChatPlaceholder";
import { URL } from "../services/api";

const Home = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  const setSocket = useSocketStore((state) => state.setSocket);
  const [socketInitialized, setSocketInitialized] = useState(false);

  useEffect(() => {
    const newSocket = io(URL);
    newSocket.emit("setup", currentUser);
    setSocket(newSocket);
    setSocketInitialized(true);
    return () => {
      newSocket.disconnect();
    };
  }, [currentUser, setSocket]);

  return socketInitialized ? (
    <HStack
      alignItems={"normal"}
      maxWidth={"1024px"}
      height={"100svh"}
      margin={"auto"}
      gap={0}
    >
      <Chats />
      {currentChat ? <Chat /> : <ChatPlaceholder />}
    </HStack>
  ) : (
    <VStack height={"100svh"} justifyContent={"center"} alignItems={"center"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="orange.500"
        size="xl"
      />
    </VStack>
  );
};

export default Home;
