import { HStack } from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <HStack
      gap={10}
      bgColor={"orange"}
      justify={"space-between"}
      width={"100%"}
      height={"4em"}
      boxShadow={"lg"}
      padding={5}
    >
      <HStack width={"100%"} justify={"space-between"}>
        <Logo />
        <NavDrawer />
      </HStack>
    </HStack>
  );
};

export default Navbar;
