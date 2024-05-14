import { HStack, Spinner, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <HStack
      position={"absolute"}
      bgColor={"green"}
      width={"100%"}
      top={0}
      left={0}
      padding={1}
      justifyContent={"center"}
    >
      <Spinner size="xs" />
      <Text fontWeight={"bold"}>Loading...</Text>
    </HStack>
  );
};

export default Loader;
