import { VStack } from "@chakra-ui/react";
import Message from "./Message";
import UserMessage from "./UserMessage";
import UserInput from "./UserInput";
import bgPattern from "/bg_pattern.svg";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <VStack
      padding={"0 10px 10px 0"}
      display={"flex"}
      flexGrow={1}
      alignItems={"normal"}
      gap={2}
    >
      <ChatHeader />
      <VStack
        p={5}
        display={"flex"}
        flexGrow={1}
        alignItems={"normal"}
        bgColor={"orange.300"}
        bgImage={bgPattern}
        bgRepeat={"repeat"}
        borderRadius={10}
        overflow={"scroll"}
        gap={1}
      >
        <Message />
        <Message />
        <UserMessage />
      </VStack>

      <UserInput />
    </VStack>
  );
};

export default Chat;
