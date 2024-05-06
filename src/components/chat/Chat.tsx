import { VStack } from "@chakra-ui/react";
import UserMessage from "./UserMessage";
import UserInput from "./UserInput";
import bgPattern from "/bg_pattern.svg";
import ChatHeader from "./ChatHeader";
import { useChatStore } from "../../store/chatStore";
import { getMessages } from "../../services/chats";
import Message from "./Message";
import { useUserStore } from "../../store/userStore";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Chat as ChatType } from "../../types/chat";
import { MessageType } from "../../types/message";
import { useQuery } from "@tanstack/react-query";

const ENDPOINT = "http://localhost:3000";
let socket: Socket, selectedChatCompare: ChatType;

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);

  const [allMessages, setAllMessages] = useState([] as MessageType[]);

  const handleNewMessage = (newMessageReceived: MessageType) => {
    if (
      !selectedChatCompare ||
      selectedChatCompare._id !== newMessageReceived.chat._id
    ) {
      // give notification
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
    socket = io(ENDPOINT);
    socket.emit("setup", currentUser);
    socket.on("message received", handleNewMessage);

    return () => {
      socket.off("message received", handleNewMessage);
    };
  });

  useEffect(() => {
    if (messages) {
      refetch();
      setAllMessages(messages);
      socket.emit("join chat", currentChat?._id);
      selectedChatCompare = currentChat!;
    }
  }, [currentChat, messages, refetch]);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <VStack
      padding={"0 10px 10px 10px"}
      display={"flex"}
      flexGrow={1}
      alignItems={"normal"}
      gap={2}
      height={"100vh"}
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

      <UserInput socket={socket} setAllMessages={setAllMessages} />
    </VStack>
  );
};

export default Chat;
