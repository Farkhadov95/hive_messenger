import { Avatar, HStack, Box, Text } from "@chakra-ui/react";
import { Chat } from "../../types/chat";

type Props = {
  chat: Chat;
};

const ChatListItem = ({ chat }: Props) => {
  return (
    <HStack
      padding={2}
      bgColor={"white"}
      textColor={"black"}
      gap={3}
      borderRadius={5}
    >
      <Avatar />
      <Box lineHeight={"1.5em"}>
        <Text fontWeight={"bold"}>{chat.chatName}</Text>
        <Text textColor={"gray"}>{chat.createdAt}</Text>
      </Box>
    </HStack>
  );
};

export default ChatListItem;
