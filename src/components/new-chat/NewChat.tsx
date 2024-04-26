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
} from "@chakra-ui/react";
import { IoPersonAdd } from "react-icons/io5";
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

  console.log(allUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <IconButton
        aria-label="new chat"
        bgColor={"orange"}
        width={"50px"}
        height={"50px"}
        borderRadius={"50%"}
        position={"absolute"}
        bottom={"10px"}
        right={"10px"}
        zIndex={1}
        onClick={onOpen}
      >
        <Icon as={IoPersonAdd} />
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
  );
};

export default NewChat;
