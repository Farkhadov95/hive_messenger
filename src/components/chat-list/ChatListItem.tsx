import { Avatar, HStack, Box, Text } from "@chakra-ui/react";

const ChatListItem = () => {
  return (
    <HStack
      padding={2}
      bgColor={"white"}
      textColor={"black"}
      gap={3}
      borderBottom={"1px solid"}
      borderColor={"gray.300"}
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
