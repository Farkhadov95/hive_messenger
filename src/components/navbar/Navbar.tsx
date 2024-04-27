import { HStack, Box } from "@chakra-ui/react";
import NavDrawer from "./NavDrawer";
import HeaderLogo from "../HeaderLogo";
import NewChat from "../new-chat/NewChat";

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
        <HeaderLogo />
        <Box>
          <NewChat />
          <NavDrawer />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;
