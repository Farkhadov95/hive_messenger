import { Stack } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <Stack mt={{ base: "4em" }} gap={0}>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </Stack>
  );
};

export default ChatList;
