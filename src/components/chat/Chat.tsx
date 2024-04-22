import { VStack } from "@chakra-ui/react";
import Message from "./Message";
import UserMessage from "./UserMessage";
import UserInput from "./UserInput";
import bgPattern from "/bg_pattern.svg";

const Chat = () => {
  return (
    <VStack p={5} display={"flex"} flexGrow={1} alignItems={"normal"}>
      <VStack
        p={5}
        display={"flex"}
        flexGrow={1}
        alignItems={"normal"}
        bgColor={"orange"}
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
