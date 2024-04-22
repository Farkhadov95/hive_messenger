import { Avatar, HStack, Box, Text } from "@chakra-ui/react";

const ChatHeader = () => {
  return (
    <HStack padding={2} bgColor={"white"} textColor={"black"} gap={3}>
      <Avatar />
      <Box lineHeight={"1.5em"}>
        <Text fontWeight={"bold"}>Name</Text>
        <Text textColor={"gray"}>last message</Text>
      </Box>
    </HStack>
  );
};

export default ChatHeader;
