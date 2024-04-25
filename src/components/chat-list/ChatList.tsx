import { Stack } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";
import NewChat from "./NewChat";

const ChatList = () => {
  return (
    <Stack
      gap={1}
      height={"100%"}
      width={{ base: "100%" }}
      bgColor={"gray.200"}
      padding={1}
      position={"relative"}
    >
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <NewChat />
    </Stack>
  );
};

export default ChatList;
