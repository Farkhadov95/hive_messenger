import { Text, VStack } from "@chakra-ui/react";
import { UserRes } from "../../types/user";
import { useCallback } from "react";
import { createChat } from "../../services/chats";
import { useChatStore } from "../../store/chatStore";
import { useSocketStore } from "../../store/socketStore";
import { Chat } from "../../types/chat";
import { useUserStore } from "../../store/userStore";

type Props = {
  user: UserRes;
  handleClose: () => void;
  handleSelect: (userID: string) => void;
  selectedUserIDs: string[];
  isGroup: boolean;
};

const NewChatUser = ({
  user,
  isGroup,
  handleClose,
  handleSelect,
  selectedUserIDs,
}: Props) => {
  const allChats = useChatStore((state) => state.allChats);
  const currentUser = useUserStore((state) => state.currentUser);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const socket = useSocketStore((state) => state.socket);

  const handleCreateChat = useCallback(async () => {
    try {
      const newChat = await createChat(user._id);
      setAllChats([...allChats, newChat]);
      socket?.emit("new chat", newChat);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  }, [allChats, handleClose, setAllChats, socket, user._id]);

  const doesChatExist = (
    chats: Chat[],
    receiver: UserRes,
    currentUser: UserRes
  ) =>
    chats.find(
      (chat) =>
        chat.users.some(
          (user) => user._id === receiver._id && user._id !== currentUser._id
        ) && !chat.isGroupChat
    );

  const handleClick = () => {
    const existingChat = doesChatExist(allChats, user, currentUser!);
    if (existingChat) {
      setCurrentChat(existingChat);
      handleClose();
      return;
    }

    if (isGroup) {
      handleSelect(user._id);
    } else {
      handleCreateChat();
      handleClose();
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
