import { Avatar, HStack, Box, Text, Button } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";

const ChatHeader = () => {
  return (
    <HStack padding={2} bgColor={"white"} justify={"space-between"}>
      <HStack textColor={"black"} gap={3}>
        <Avatar />
        <Box lineHeight={"1.5em"}>
          <Text fontWeight={"bold"}>Name</Text>
          <Text textColor={"gray"}>last message</Text>
        </Box>
      </HStack>
      <Button
        as={HiDotsVertical}
        color={"gray.400"}
        width={"fit-content"}
        height={"20px"}
        padding={0}
      />
    </HStack>
  );
};

export default ChatHeader;
