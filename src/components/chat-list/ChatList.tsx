import { Stack, Text } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { getChats } from "../../services/chats";
import { useEffect, useState } from "react";
import { useChatStore } from "../../store/chatStore";

const ChatList = () => {
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getChats()
      .then((res) => {
        setAllChats(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [setAllChats]);

  return (
    <Stack
      gap={1}
      height={"100%"}
      width={{ base: "100%" }}
      bgColor={"gray.200"}
      padding={2}
      overflow={"scroll"}
    >
      {isLoading ? (
        <Text>Loading...</Text>
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
