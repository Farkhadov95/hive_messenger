import { Text, VStack } from "@chakra-ui/react";
import { UserRes } from "../../types/user";
import { useCallback } from "react";
import { createChat } from "../../services/chats";
import { useChatStore } from "../../store/chatStore";

type Props = {
  user: UserRes;
  onClose: () => void;
};

const NewChatUser = ({ user, onClose }: Props) => {
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);

  const handleCreateChat = useCallback(async () => {
    try {
      const newChats = await createChat(user._id, user.username);
      setAllChats([...allChats, newChats]);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }, [allChats, onClose, setAllChats, user._id, user.username]);

  return (
    <VStack
      alignItems={"start"}
      gap={0}
      border={"1px solid"}
      width={"100%"}
      boxSizing="border-box"
      padding={2}
      borderRadius={5}
      bgColor={"gray.300"}
      color={"black"}
      onClick={handleCreateChat}
    >
      <Text fontWeight={"bolder"}>{user.username}</Text>
      <Text>{user.email}</Text>
    </VStack>
  );
};

export default NewChatUser;
