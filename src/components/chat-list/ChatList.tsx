import { Stack, Text } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { getChats } from "../../services/chats";
import { useEffect } from "react";
import { useChatStore } from "../../store/chatStore";
import { useQuery } from "@tanstack/react-query";
import { useSocketStore } from "../../store/socketStore";
import { replaceChat } from "./utils";
import Loader from "../Loader";

const ChatList = () => {
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const socket = useSocketStore((state) => state.socket);
  const currentChat = useChatStore((state) => state.currentChat);
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);

  const { data: chats, isFetching } = useQuery({
    queryKey: ["chats"],
    queryFn: () => getChats(),
  });

  useEffect(() => {
    if (chats) {
      setAllChats(chats);
    }
  }, [chats, setAllChats]);

  useEffect(() => {
    if (socket?.connected) {
      console.log("socket", socket?.connected);
      socket?.on("chat deleted response", (resChat) => {
        setAllChats(allChats.filter((chat) => chat._id !== resChat._id));
        setCurrentChat(null);
      });

      socket?.on("new chat response", (chat) => {
        setAllChats([...allChats, chat]);
      });

      socket?.on("new chat name response", (chat) => {
        const newChats = replaceChat(allChats, chat);
        setAllChats(newChats);
      });

      socket?.on("new group chat response", (chat) => {
        setAllChats([...allChats, chat]);
      });

      socket?.on("new group users response", (chat) => {
        console.log("User add response");
        const newChats = replaceChat(allChats, chat);
        currentChat?._id === chat._id && setCurrentChat(chat);
        setAllChats(newChats);
      });

      socket?.on("user deleted response", (chat) => {
        console.log("User deleted response");
        const newChats = replaceChat(allChats, chat);
        setAllChats(newChats);
        currentChat?._id === chat._id && setCurrentChat(chat);
      });

      return () => {
        socket?.off("chat deleted response");
        socket?.off("new chat response");
        socket?.off("new chat name response");
        socket?.off("new group chat response");
        socket?.off("user deleted response");
      };
    }
  });

  return (
    <Stack
      gap={1}
      height={"100%"}
      width={{ base: "100%" }}
      bgColor={"gray.200"}
      padding={2}
      overflow={"scroll"}
      position={"relative"}
    >
      {isFetching ? (
        <Loader />
      ) : allChats?.length === 0 ? (
        <Text
          fontWeight={"border"}
          color={"gray.600"}
          textAlign={"center"}
          padding={3}
        >
          No chats available
        </Text>
      ) : (
        allChats?.map((chat) => <ChatListItem key={chat?._id} chat={chat} />)
      )}
    </Stack>
  );
};

export default ChatList;
