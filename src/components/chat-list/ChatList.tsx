import { Stack } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <Stack
      gap={1}
      height={"100%"}
      width={{ base: "100%", md: "40%" }}
      bgColor={"gray.200"}
      padding={1}
    >
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </Stack>
  );
};

export default ChatList;
