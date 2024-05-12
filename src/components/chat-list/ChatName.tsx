import {
  Button,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { changeName } from "../../services/chats";
import { useChatStore } from "../../store/chatStore";
import { Chat } from "../../types/chat";
import { useSocketStore } from "../../store/socketStore";
import { replaceChat } from "./utils";

interface Props {
  chat: Chat;
}

const ChatName = ({ chat }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const socket = useSocketStore((state) => state.socket);
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const [name, setName] = useState<string>(chat.chatName as string);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChangeName = useMutation({
    mutationFn: () => changeName(chat._id, name),
    onSuccess: (data) => {
      socket?.emit("new chat name", data);
      const newChats = replaceChat(allChats, data);
      setAllChats(newChats);
      onClose();
    },
  });

  return (
    <>
      <MenuItem
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        icon={<MdEdit />}
        fontWeight={"bold"}
      >
        Edit name
      </MenuItem>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New chat name</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Friends "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              onClick={() => handleChangeName.mutate()}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatName;
