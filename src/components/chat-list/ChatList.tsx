import { Stack } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <Stack gap={0} width={{ base: "100%", md: "40%" }}>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </Stack>
  );
};

export default ChatList;
