import { Avatar, HStack, Box, Text } from "@chakra-ui/react";
import { useChatStore } from "../../store/chatStore";
import HeaderMenu from "./HeaderMenu";
import HeaderUsers from "./HeaderUsers";

const ChatHeader = () => {
  const currentChat = useChatStore((state) => state.currentChat);

  return (
    <HStack
      padding={2}
      bgColor={"white"}
      justify={"space-between"}
      borderRadius={"0 0 10px 10px"}
    >
      <HStack textColor={"black"} gap={3}>
        <Avatar />
        <Box lineHeight={"1.5em"}>
          <Text fontWeight={"bold"}>{currentChat?.chatName}</Text>
          <HeaderUsers />
        </Box>
      </HStack>
      <HeaderMenu />
    </HStack>
  );
};

export default ChatHeader;
