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

type Props = {
  chat: Chat;
};

const ChatListItem = ({ chat }: Props) => {
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const socket = useSocketStore((state) => state.socket);

  // const isMdScreen = useMediaQuery("(min-width: 1024 )");
  // const navigate = useNavigate();

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
      }}
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
