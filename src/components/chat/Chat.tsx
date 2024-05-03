import { VStack } from "@chakra-ui/react";
import UserMessage from "./UserMessage";
import UserInput from "./UserInput";
import bgPattern from "/bg_pattern.svg";
import ChatHeader from "./ChatHeader";
import { useChatStore } from "../../store/chatStore";
import { MessageType } from "../../types/message";
import { getMessages } from "../../services/chats";
import Message from "./Message";
import { useUserStore } from "../../store/userStore";
import { useEffect, useState } from "react";

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  const [allMessages, setAllMessages] = useState([] as MessageType[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMessages(currentChat?._id)
      .then((res) => {
        setAllMessages(res);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [currentChat, currentUser]);

  console.log("allMessages", allMessages);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
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
        {allMessages?.map((message) =>
          message.sender._id === currentUser?._id ? (
            <UserMessage key={message._id} message={message} />
          ) : (
            <Message key={message._id} message={message} />
          )
        )}
      </VStack>

      <UserInput />
    </VStack>
  );
};

export default Chat;
