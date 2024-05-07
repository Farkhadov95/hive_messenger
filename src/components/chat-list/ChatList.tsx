import { Stack, Text } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { getChats } from "../../services/chats";
import { useEffect } from "react";
import { useChatStore } from "../../store/chatStore";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);

  const { data: chats, isFetching } = useQuery({
    queryKey: ["chats"],
    queryFn: () => getChats(),
  });

  useEffect(() => {
    if (chats) {
      setAllChats(chats);
    }
  }, [chats, setAllChats]);

  return (
    <Stack
      gap={1}
      height={"100%"}
      width={{ base: "100%" }}
      bgColor={"gray.200"}
      padding={2}
      overflow={"scroll"}
    >
      {isFetching ? (
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
