import { HStack, VStack, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import ChatList from "../components/chat-list/ChatList";
import Chat from "../components/chat/Chat";
import { useChatStore } from "../store/chatStore";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUserStore } from "../store/userStore";
import { useSocketStore } from "../store/socketStore";

const ENDPOINT = "http://localhost:3000";

const Home = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  const setSocket = useSocketStore((state) => state.setSocket);
  const [socketInitialized, setSocketInitialized] = useState(false);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    newSocket.emit("setup", currentUser);
    setSocket(newSocket);
    setSocketInitialized(true);
    return () => {
      newSocket.disconnect();
    };
  }, [currentUser, setSocket]);

  return socketInitialized ? (
    <HStack alignItems={"normal"} maxWidth={"1024px"} margin={"auto"} gap={0}>
      <VStack
        width={{ base: "100%", md: "40%" }}
        alignItems={"normal"}
        height={"100vh"}
        gap={0}
      >
        <Navbar />
        <ChatList />
      </VStack>
      <Show above="md">{currentChat && <Chat />}</Show>
    </HStack>
  ) : (
    <div>Loading...</div>
  );
};

export default Home;
