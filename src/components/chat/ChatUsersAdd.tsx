import {
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { useChatStore } from "../../store/chatStore";
import ChatUsersAddList from "./ChatUsersAddList";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addUserToGroup } from "../../services/chats";
import { useSocketStore } from "../../store/socketStore";
import { replaceChat } from "../chat-list/utils";

const ChatUsersAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const socket = useSocketStore((state) => state.socket);
  const allUsers = useChatStore((state) => state.allUsers);
  const currentChat = useChatStore((state) => state.currentChat);
  const setCurrentChat = useChatStore((state) => state.setCurrentChat);
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const [selectedUserIDs, setSelectedUserIDs] = useState<string[]>([]);

  const handleSelect = (userID: string) => {
    if (selectedUserIDs.some((id) => id === userID)) {
      setSelectedUserIDs(selectedUserIDs.filter((id) => id !== userID));
    } else {
      setSelectedUserIDs([...selectedUserIDs, userID]);
      console.log(selectedUserIDs);
    }
  };

  const handleClose = () => {
    setSelectedUserIDs([]);
    onClose();
  };

  const chatUsers = currentChat?.users.map((user) => user.username);
  const availableUsers = allUsers.filter(
    (user) => !chatUsers?.includes(user.username)
  );

  const handleAddUsers = useMutation({
    mutationFn: () => addUserToGroup(currentChat!._id, selectedUserIDs),
    onSuccess: (data) => {
      socket?.emit("new group users", data);
      setAllChats(replaceChat(allChats, data));
      currentChat?._id === data._id && setCurrentChat(data);
      handleClose();
    },
  });

  if (!currentChat) return null;

  return (
    <>
      <MenuItem
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        icon={<FiUsers />}
        bgColor={"inherit"}
        fontWeight={"bolder"}
      >
        Add Users
      </MenuItem>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxHeight={"500px"}>
          <ModalHeader>Add Users</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow={"scroll"} my={0}>
            <ChatUsersAddList
              users={availableUsers}
              handleSelect={handleSelect}
              selectedUserIDs={selectedUserIDs}
            />
          </ModalBody>
          <ModalFooter gap={2}>
            <Button onClick={onClose} variant={"outline"}>
              Close
            </Button>
            <Button
              onClick={() => handleAddUsers.mutate()}
              variant="outline"
              colorScheme="orange"
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatUsersAdd;
