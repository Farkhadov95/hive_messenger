import { Box, Icon, Text, VStack } from "@chakra-ui/react";
import { BiMessageSquareAdd } from "react-icons/bi";

const ChatPlaceholder = () => {
  return (
    <VStack
      padding={5}
      display={"flex"}
      flexGrow={1}
      alignItems={"normal"}
      height={"100vh"}
      bgColor={"gray.700"}
      boxShadow={"5px"}
    >
      <Box
        bgColor={"orange.300"}
        height={"100%"}
        borderRadius={5}
        padding={5}
        display={"flex"}
        alignItems={"center"}
      >
        <VStack
          margin={"auto"}
          bgColor={"gray.100"}
          padding={5}
          borderRadius={5}
        >
          <Text fontSize={"15px"} fontWeight={"bold"} color={"gray.700"}>
            No messages here yet...
          </Text>
          <Text fontSize={"12px"} fontWeight={"bold"} color={"gray.700"}>
            Select chat or create new one
          </Text>
          <Icon as={BiMessageSquareAdd} fontSize={"30px"} color={"gray.700"} />
        </VStack>
      </Box>
    </VStack>
  );
};

export default ChatPlaceholder;
