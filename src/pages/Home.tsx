import { HStack, VStack, Show } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import ChatList from "../components/chat-list/ChatList";
import Chat from "../components/chat/Chat";

const Home = () => {
  return (
    <VStack alignItems={"normal"} paddingTop={"4em"}>
      <Navbar />
      <HStack alignItems={"normal"} justifyContent={"space-between"}>
        <ChatList />
        <Show above="md">
          <Chat />
        </Show>
      </HStack>
    </VStack>
  );
};

export default Home;
