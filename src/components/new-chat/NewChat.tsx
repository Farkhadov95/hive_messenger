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

const NewChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [allUsers, setAllUsers] = useState([] as UserRes[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then((res) => {
        setAllUsers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  return !isLoading ? (
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
                  <NewChatUser user={user} key={user._id} />
                ))}
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="outline"
                colorScheme="red"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button variant="outline" colorScheme="green">
                Open
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
