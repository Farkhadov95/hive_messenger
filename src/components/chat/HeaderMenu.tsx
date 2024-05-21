import { Menu, MenuButton, IconButton, MenuList } from "@chakra-ui/react";
import { SlOptionsVertical } from "react-icons/sl";
import ChatUsers from "./ChatUsers";

const HeaderMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<SlOptionsVertical />}
        variant="outline"
        color={"gray.600"}
        marginLeft={"auto"}
        marginBottom={"auto"}
        onClick={(e) => e.stopPropagation()}
      />

      <MenuList color={"white"}>
        <ChatUsers />
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
