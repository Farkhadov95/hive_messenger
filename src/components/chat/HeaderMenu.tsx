import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
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
        <MenuItem
          icon={<RiDeleteBin6Line />}
          bgColor={"inherit"}
          fontWeight={"bolder"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
