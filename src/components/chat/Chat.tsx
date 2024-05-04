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

const ENDPOINT = "http://localhost:3000";
let socket: Socket, selectedChatCompare: ChatType;

const Chat = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);

  const [isLoading, setIsLoading] = useState(true);
  const [socketConnected, setSocketConnected] = useState(false);
  const [allMessages, setAllMessages] = useState([] as MessageType[]);

  const fetchMessages = () => {
    getMessages(currentChat?._id)
      .then((res) => {
        setAllMessages(res);
        socket.emit("join chat", currentChat?._id);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleNewMessage = (newMessageReceived: MessageType) => {
    console.log("message received");
    if (
      !selectedChatCompare ||
      selectedChatCompare._id !== newMessageReceived.chat._id
    ) {
      // give notification
    } else {
      console.log(newMessageReceived);
      setAllMessages((prev) => [...prev, newMessageReceived]);
    }
  };

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = currentChat!;
  }, [currentChat]);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", currentUser);
    socket.on("connected", () => setSocketConnected(true));
    console.log("connected");

    socket.on("message received", handleNewMessage);

    return () => {
      socket.off("message received", handleNewMessage);
    };
  }, []);

  return isLoading ? (
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

      <UserInput
        socket={socket}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </VStack>
  );
};

export default Chat;
