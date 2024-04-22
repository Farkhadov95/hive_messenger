import { Avatar, HStack, Box, Text } from "@chakra-ui/react";

const ChatListItem = () => {
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
        <Text>Name</Text>
        <Text textColor={"gray"}>last message</Text>
      </Box>
    </HStack>
  );
};

export default ChatListItem;
