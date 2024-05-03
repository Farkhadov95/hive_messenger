import { HStack, VStack, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import ChatList from "../components/chat-list/ChatList";
import Chat from "../components/chat/Chat";
import { useChatStore } from "../store/chatStore";

const Home = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  return (
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
  );
};

export default Home;
