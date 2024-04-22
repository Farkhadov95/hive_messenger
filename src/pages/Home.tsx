import { HStack, VStack, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import ChatList from "../components/chat-list/ChatList";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <HStack alignItems={"normal"}>
      <VStack
        width={{ base: "100%", md: "40%" }}
        alignItems={"normal"}
        height={"100vh"}
        gap={0}
      >
        <Navbar />
        <ChatList />
      </VStack>

      <Show above="md">
        <Chat />
      </Show>
    </HStack>
  );
};

export default Home;
