import { VStack } from "@chakra-ui/react";
import UserMessage from "../components/chat/UserMessage";
import UserInput from "../components/chat/UserInput";
import bgPattern from "/bg_pattern.svg";
import ChatHeader from "../components/chat/ChatHeader";
import { useChatStore } from "../store/chatStore";
import { getMessages } from "../services/chats";
import Message from "../components/chat/Message";
import { useUserStore } from "../store/userStore";
import { useEffect, useState } from "react";
import { Chat as ChatType } from "../types/chat";
import { MessageType } from "../types/message";
import { useQuery } from "@tanstack/react-query";
import { useSocketStore } from "../store/socketStore";
import Loader from "../components/Loader";

let selectedChatCompare: ChatType;

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  const socket = useSocketStore((state) => state.socket);
  const [allMessages, setAllMessages] = useState([] as MessageType[]);

  const handleNewMessage = (newMessageReceived: MessageType) => {
    if (
      !selectedChatCompare ||
      selectedChatCompare._id !== newMessageReceived.chat._id
    ) {
      // give notification
      console.log("New Notification");
    } else {
      setAllMessages((prev) => [...prev, newMessageReceived]);
    }
  };

  const {
    data: messages,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: () => getMessages(currentChat?._id),
  });

  useEffect(() => {
    if (messages) {
      refetch();
      setAllMessages(messages);
      socket?.emit("join chat", currentChat?._id);
      selectedChatCompare = currentChat!;
    }
  }, [currentChat, messages, refetch, socket]);

  useEffect(() => {
    socket?.on("message received", handleNewMessage);

    return () => {
      socket?.off("message received", handleNewMessage);
    };
  });

  return (
    <VStack
      padding={"0 10px 10px 10px"}
      display={"flex"}
      flexGrow={1}
      alignItems={"normal"}
      gap={2}
      height={"100svh"}
      bgColor={"gray.700"}
      boxShadow={"5px"}
      position={"relative"}
    >
      {isPending ? (
        <Loader />
      ) : (
        <>
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
            flexDirection={"column-reverse"}
          >
            {allMessages
              .slice()
              .reverse()
              .map((message) =>
                message.sender._id === currentUser?._id ? (
                  <UserMessage key={message._id} message={message} />
                ) : (
                  <Message key={message._id} message={message} />
                )
              )}
          </VStack>
          <UserInput setAllMessages={setAllMessages} />
        </>
      )}
    </VStack>
  );
};

export default Chat;
