import { VStack, HStack, Text, IconButton, Box } from "@chakra-ui/react";
import { useChatStore } from "../../store/chatStore";
import { useUserStore } from "../../store/userStore";
import { IoMdClose } from "react-icons/io";
import { useCallback } from "react";
import { deleteUserFromGroup } from "../../services/chats";
import { useSocketStore } from "../../store/socketStore";

interface Props {
  handleClose: () => void;
}

const ChatUsersList = ({ handleClose }: Props) => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  const socket = useSocketStore((state) => state.socket);

  const handleDeleteUser = useCallback(
    async (userID: string) => {
      try {
        const newChat = await deleteUserFromGroup(currentChat!._id, userID);
        socket?.emit("user deleted", newChat);
        handleClose();
      } catch (error) {
        console.error(error);
      }
    },
    [currentChat, handleClose, socket]
  );

  return (
    <VStack alignItems={"flex-start"} gap={1}>
      {currentChat?.users.map((user) => (
        <HStack
          key={user._id}
          gap={0}
          border={"1px solid"}
          width={"100%"}
          boxSizing="border-box"
          padding={2}
          borderRadius={5}
          bgColor={"gray.300"}
          color={"black"}
          position={"relative"}
        >
          <Box>
            <HStack gap={1}>
              <Text fontWeight={"bolder"}>{user.username}</Text>
              <Text>{currentUser?._id == user._id && "(You)"}</Text>
            </HStack>
            <Text>{user.email}</Text>
          </Box>
          <IconButton
            aria-label="remove user"
            icon={<IoMdClose />}
            padding={0}
            fontSize={"24px"}
            position={"absolute"}
            top={0}
            right={0}
            onClick={() => handleDeleteUser(user._id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default ChatUsersList;
