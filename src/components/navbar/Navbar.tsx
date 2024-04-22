import { Text, HStack, Icon } from "@chakra-ui/react";
import { GiTreeBeehive } from "react-icons/gi";
import Search from "./Search";
import SearchButton from "./SearchButton";

const Navbar = () => {
  return (
    <HStack
      height={{ base: "4rem" }}
      p={5}
      bgColor={"#FFB91F"}
      justify={"space-between"}
      position={"fixed"}
      top={0}
      width={"100%"}
    >
      <HStack>
        <Icon as={GiTreeBeehive} width={"30px"} height={"30px"} />
        <Text fontWeight={"900"} fontStyle={"italic"}>
          HIVE
        </Text>
      </HStack>

      <Search />
      <SearchButton />
    </HStack>
  );
};

export default Navbar;
