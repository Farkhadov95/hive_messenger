import {
  IconButton,
  Icon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { getAllUsers } from "../../services/user";
import NewChatUser from "./NewChatUser";
import { UserRes } from "../../types/user";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const NewChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allUsers, setAllUsers] = useState([] as UserRes[]);

  const { data: users, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  useEffect(() => {
    setAllUsers(users);
  }, [users]);

  return !isFetching ? (
    allUsers ? (
      <>
        <IconButton
          aria-label={"New chat"}
          onClick={onOpen}
          variant={"outline"}
          border={"1px solid"}
          padding={0}
          width={"40px"}
          height={"40px"}
        >
          <Icon as={IoMdAdd} height={"25px"} width={"20px"} />
        </IconButton>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent maxHeight={"500px"}>
            <ModalHeader>Choose contact</ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow={"scroll"}>
              <VStack alignItems={"start"}>
                {allUsers?.map((user) => (
                  <NewChatUser user={user} key={user._id} onClose={onClose} />
                ))}
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline" colorScheme="red" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    ) : (
      <Text>No chats yet</Text>
    )
  ) : (
    <div>Loading...</div>
  );
};

export default NewChat;
