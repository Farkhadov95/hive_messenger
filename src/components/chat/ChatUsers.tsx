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
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { useChatStore } from "../../store/chatStore";
import { useUserStore } from "../../store/userStore";

const ChatUsers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  //   const allUsers = useChatStore((state) => state.allUsers);

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
            <VStack alignItems={"flex-start"} gap={1}>
              {currentChat?.users.map((user) => (
                <VStack
                  key={user._id}
                  alignItems={"start"}
                  gap={0}
                  border={"1px solid"}
                  width={"100%"}
                  boxSizing="border-box"
                  padding={2}
                  borderRadius={5}
                  bgColor={"gray.300"}
                  color={"black"}
                >
                  <HStack gap={1}>
                    <Text fontWeight={"bolder"}>{user.username}</Text>
                    <Text>{currentUser?._id == user._id && "(You)"}</Text>
                  </HStack>
                  <Text>{user.email}</Text>
                </VStack>
              ))}
            </VStack>
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
