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
  FormControl,
  FormLabel,
  Switch,
  Input,
  Box,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { getAllUsers } from "../../services/user";
import NewChatUser from "./NewChatUser";
import { UserRes } from "../../types/user";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserStore } from "../../store/userStore";
import { createGroupChat } from "../../services/chats";
import { useSocketStore } from "../../store/socketStore";
import { useChatStore } from "../../store/chatStore";

const NewChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const socket = useSocketStore((state) => state.socket);
  const currentUser = useUserStore((state) => state.currentUser);
  const allChats = useChatStore((state) => state.allChats);
  const setAllChats = useChatStore((state) => state.setAllChats);
  const [allUsers, setAllUsers] = useState([] as UserRes[]);
  const [selectedUserIDs, setSelectedUserIDs] = useState<string[]>([]);
  const [isGroup, setIsGroup] = useState(false);
  const [groupName, setGroupName] = useState("");

  const handleSelect = (userID: string) => {
    if (selectedUserIDs.some((id) => id === userID)) {
      setSelectedUserIDs(selectedUserIDs.filter((id) => id !== userID));
    } else {
      setSelectedUserIDs([...selectedUserIDs, userID]);
    }
  };

  const handleGroupSwitch = () => {
    setIsGroup(!isGroup);
    setSelectedUserIDs([]);
  };

  const handleClose = () => {
    setSelectedUserIDs([]);
    setIsGroup(false);
    setGroupName("");
    onClose();
  };

  const handleCreateGroup = useMutation({
    mutationFn: () =>
      createGroupChat(selectedUserIDs, groupName || "New Group"),
    onSuccess: (data) => {
      socket?.emit("new group chat", data);
      setAllChats([...allChats, data]);
      handleClose();
    },
  });

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
          onClose={handleClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent maxHeight={"500px"}>
            <ModalHeader>
              <Text>Select contact</Text>
              {isGroup && (
                <Box mt={2}>
                  <Text mb={1} ml={1} fontSize={"0.8rem"}>
                    Group Name
                  </Text>
                  <Input
                    value={groupName}
                    aria-label="group name"
                    placeholder="Your group name"
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </Box>
              )}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow={"scroll"} my={0}>
              <VStack alignItems={"start"}>
                {allUsers
                  .filter((user) => user._id !== currentUser?._id)
                  ?.map((user) => (
                    <NewChatUser
                      user={user}
                      key={user._id}
                      handleClose={handleClose}
                      handleSelect={handleSelect}
                      selectedUserIDs={selectedUserIDs}
                      isGroup={isGroup}
                    />
                  ))}
              </VStack>
            </ModalBody>
            <ModalFooter gap={2}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="group" mb="0">
                  Group
                </FormLabel>
                <Switch
                  id="group"
                  colorScheme="orange"
                  onChange={handleGroupSwitch}
                />
              </FormControl>
              <Button variant="outline" colorScheme="red" onClick={handleClose}>
                Close
              </Button>
              {isGroup && (
                <Button
                  variant="outline"
                  colorScheme="orange"
                  onClick={() => handleCreateGroup.mutate()}
                >
                  Create
                </Button>
              )}
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
