import { Stack, Text } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import { getChats } from "../../services/chats";
import { useEffect, useState } from "react";
import { Chat } from "../../types/chat";

const ChatList = () => {
  const [allChats, setAllChats] = useState([] as Chat[]);
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
  }, []);

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
      {allChats?.length === 0 ? (
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
  ) : (
    <div>Loading...</div>
  );
};

export default ChatList;
