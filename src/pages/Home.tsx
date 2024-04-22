import { HStack, VStack, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import ChatList from "../components/chat-list/ChatList";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <VStack alignItems={"normal"} gap={0} height={"100vh"}>
      <Navbar />
      <HStack
        alignItems={"normal"}
        justifyContent={"space-between"}
        gap={0}
        flexGrow={1}
      >
        <ChatList />
        <Show above="md">
          <Chat />
        </Show>
      </HStack>
    </VStack>
  );
};

export default Home;
