import { VStack } from "@chakra-ui/react";
import ChatList from "../components/chat-list/ChatList";
import Navbar from "../components/navbar/Navbar";

const Chats = () => {
  return (
    <VStack
      minWidth={{ base: "100%", md: "40%" }}
      alignItems={"normal"}
      height={"100%"}
      gap={0}
    >
      <Navbar />
      <ChatList />
    </VStack>
  );
};

export default Chats;
