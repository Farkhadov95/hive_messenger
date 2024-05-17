import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  MenuItem,
} from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import ChatUsersList from "./ChatUsersList";

const ChatUsers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        Users
      </MenuItem>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxHeight={"500px"}>
          <ModalHeader>Chat users</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflow={"scroll"} my={0}>
            <ChatUsersList handleClose={onClose} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatUsers;
