import { HStack, Spinner, useMediaQuery, VStack } from "@chakra-ui/react";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { useChatStore } from "../store/chatStore";
import { useUserStore } from "../store/userStore";
import { useSocketStore } from "../store/socketStore";
import ChatPlaceholder from "./ChatPlaceholder";
import { URL } from "../services/api";
import Chats from "./Chats";
import Chat from "./Chat";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
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
    isMobile ? (
      location.pathname.startsWith("/chat") ? (
        <Chat />
      ) : (
        <Chats />
      )
    ) : (
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
    )
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
