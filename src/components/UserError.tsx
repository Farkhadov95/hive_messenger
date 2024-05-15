import { Box, Text } from "@chakra-ui/react";

interface Props {
  error: string;
}

const UserError = ({ error }: Props) => {
  return (
    <Box
      position={"absolute"}
      top={"-10svh"}
      bgColor={"red.500"}
      width={"100%"}
      textAlign={"center"}
    >
      <Text fontWeight={"bold"} fontSize={"1.2rem"}>
        {error}
      </Text>
    </Box>
  );
};

export default UserError;
