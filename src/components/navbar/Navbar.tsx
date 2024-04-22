import { Text, HStack, Icon } from "@chakra-ui/react";
import { GiTreeBeehive } from "react-icons/gi";
import Search from "./Search";
import SearchButton from "./SearchButton";

const Navbar = () => {
  return (
    <HStack
      bgColor={"#FFB91F"}
      justify={"space-between"}
      width={"100%"}
      height={"4em"}
      boxShadow={"lg"}
      padding={5}
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
