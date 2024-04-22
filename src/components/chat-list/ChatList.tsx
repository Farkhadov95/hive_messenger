import { Stack } from "@chakra-ui/react";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  return (
    <Stack
      gap={0}
      height={"100%"}
      width={{ base: "100%", md: "40%" }}
      bgColor={"gray.100"}
    >
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </Stack>
  );
};

export default ChatList;
