import { VStack, Icon, Text } from "@chakra-ui/react";
import { GiTreeBeehive } from "react-icons/gi";

const Logo = () => {
  return (
    <VStack>
      <Icon
        as={GiTreeBeehive}
        width={"100px"}
        height={"100px"}
        color={"orange"}
      />
      <Text fontWeight={"900"} fontStyle={"italic"} fontSize={"30px"}>
        HIVE
      </Text>
    </VStack>
  );
};

export default Logo;
