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
import { Chat } from "../../types/chat";
import { useChatStore } from "../../store/chatStore";
import { deleteChat } from "../../services/chats";
import { useSocketStore } from "../../store/socketStore";
import ChatName from "./ChatName";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/Routes";

type Props = {
  chat: Chat;
};

const ChatListItem = ({ chat }: Props) => {
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const socket = useSocketStore((state) => state.socket);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const res = await deleteChat(chat._id);
      const filteredChats = allChats.filter((chat) => chat._id !== res._id);
      setAllChats(filteredChats);
      setCurrentChat(null); // null only if current
      socket?.emit("chat deleted", chat);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HStack
      padding={"8px 8px 8px 12px"}
      bgColor={"white"}
      textColor={"black"}
      gap={3}
      borderRadius={5}
      onClick={() => {
        setCurrentChat(chat);
        navigate(routes.chat);
      }}
    >
      <HStack>
        <Avatar />
        <Box lineHeight={"1.5em"}>
          <Text fontWeight={"bold"}>{chat.chatName}</Text>
          <Text textColor={"gray"} fontSize={"sm"}>
            Updated: {moment(chat.updatedAt).format("MMMM Do YYYY")}
          </Text>
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
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            Delete
          </MenuItem>
          <ChatName chat={chat} />
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ChatListItem;
