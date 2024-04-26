import { HStack, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <HStack padding={5} justify={"center"} height={"30vh"}>
      <Text fontSize={"x-large"} fontWeight={"bold"}>
        404: Page not found
      </Text>
    </HStack>
  );
};

export default NotFound;
