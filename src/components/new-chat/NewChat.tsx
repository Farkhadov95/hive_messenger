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
import { useQuery } from "react-query";
import { UserRes } from "../../types/user";

const NewChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: allUsers, isLoading } = useQuery<UserRes[]>({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  return !isLoading ? (
    allUsers ? (
      <>
        <IconButton
          aria-label="new chat"
          onClick={onOpen}
          variant={"ghost"}
          colorScheme="'white"
          padding={0}
        >
          <Icon as={IoMdAdd} width={"20px"} height={"20px"} />
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
