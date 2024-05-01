import { Stack, Text } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { useQuery } from "react-query";
import { getChats } from "../../services/chats";
import { Chat } from "../../types/chat";

const ChatList = () => {
  const { data: allChats, isLoading } = useQuery<Chat[]>({
    queryKey: ["chats"],
    queryFn: () => getChats(),
  });

  console.log(allChats);

  return !isLoading ? (
    <Stack
      gap={1}
      height={"100%"}
      width={{ base: "100%" }}
      bgColor={"gray.200"}
      padding={2}
      overflow={"scroll"}
    >
      {allChats?.map((chat) => (
        <ChatListItem key={chat._id} chat={chat} />
      ))}
      <Text>No chats yet</Text>
    </Stack>
  ) : (
    <div>Loading...</div>
  );
};

export default ChatList;
