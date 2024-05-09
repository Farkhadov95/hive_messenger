import { Text, VStack } from "@chakra-ui/react";
import { UserRes } from "../../types/user";
import { useCallback } from "react";
import { createChat } from "../../services/chats";
import { useChatStore } from "../../store/chatStore";
import { useSocketStore } from "../../store/socketStore";

type Props = {
  user: UserRes;
  onClose: () => void;
  handleSelect: (userID: string) => void;
  selectedUserIDs: string[];
  isGroup: boolean;
};

const NewChatUser = ({
  user,
  isGroup,
  onClose,
  handleSelect,
  selectedUserIDs,
}: Props) => {
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const socket = useSocketStore((state) => state.socket);

  const handleCreateChat = useCallback(async () => {
    try {
      const newChat = await createChat(user._id);
      setAllChats([...allChats, newChat]);
      socket?.emit("new chat", newChat);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }, [allChats, onClose, setAllChats, socket, user._id]);

  const handleClick = () => {
    if (isGroup) {
      handleSelect(user._id);
    } else {
      handleCreateChat();
      onClose();
    }
  };

  return (
    <VStack
      alignItems={"start"}
      gap={0}
      border={"1px solid"}
      width={"100%"}
      boxSizing="border-box"
      padding={2}
      borderRadius={5}
      bgColor={selectedUserIDs.includes(user._id) ? "orange" : "gray.300"}
      color={"black"}
      onClick={() => handleClick()}
    >
      <Text fontWeight={"bolder"}>{user.username}</Text>
      <Text>{user.email}</Text>
    </VStack>
  );
};

export default NewChatUser;
