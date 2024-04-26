import { HStack, Icon, Text } from "@chakra-ui/react";
import { GiTreeBeehive } from "react-icons/gi";

const HeaderLogo = () => {
  return (
    <HStack>
      <Icon as={GiTreeBeehive} width={"30px"} height={"30px"} />
      <Text fontWeight={"900"} fontStyle={"italic"}>
        HIVE
      </Text>
    </HStack>
  );
};

export default HeaderLogo;
