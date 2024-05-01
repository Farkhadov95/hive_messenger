import {
  Avatar,
  HStack,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { SlOptionsVertical } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { Chat } from "../../types/chat";

type Props = {
  chat: Chat;
};

const ChatListItem = ({ chat }: Props) => {
  return (
    <HStack
      padding={"8px 8px 8px 12px"}
      bgColor={"white"}
      textColor={"black"}
      gap={3}
      borderRadius={5}
      onClick={() => console.log("Chat click")}
    >
      <HStack>
        <Avatar />
        <Box lineHeight={"1.5em"}>
          <Text fontWeight={"bold"}>{chat.chatName}</Text>
          <Text textColor={"gray"}>{chat.createdAt}</Text>
        </Box>
      </HStack>
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
          <MenuItem
            icon={<RiDeleteBin6Line />}
            bgColor={"inherit"}
            fontWeight={"bolder"}
            onClick={(e) => e.stopPropagation()}
          >
            Delete
          </MenuItem>
          <MenuItem
            icon={<MdEdit />}
            bgColor={"inherit"}
            fontWeight={"bolder"}
            onClick={(e) => e.stopPropagation()}
          >
            Edit name
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ChatListItem;
