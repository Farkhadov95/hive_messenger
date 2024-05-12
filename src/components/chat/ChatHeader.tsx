import { Avatar, HStack, Box, Text, IconButton, Icon } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useChatStore } from "../../store/chatStore";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  const navigate = useNavigate();

  // const isMoreThanThreeUsers = () =>
  //   currentChat && currentChat?.users?.length > 3;

  // const displayUsers = () =>
  //   currentChat &&
  //   (isMoreThanThreeUsers()
  //     ? currentChat.users.slice(0, 2)
  //     : currentChat.users);
  return (
    <HStack
      padding={2}
      bgColor={"white"}
      justify={"space-between"}
      borderRadius={"0 0 10px 10px"}
    >
      <HStack textColor={"black"} gap={3}>
        <IconButton
          display={{ base: "initial", md: "none" }}
          padding={"auto"}
          aria-label={"return"}
          icon={<IoMdArrowRoundBack />}
          color={"orange"}
          fontSize={"24px"}
          onClick={() => navigate(-1)}
        />
        <Avatar />
        <Box lineHeight={"1.5em"}>
          <Text fontWeight={"bold"}>{currentChat?.chatName}</Text>
          <HStack gap={1} divider={<Text>,</Text>}>
            {currentChat?.users.map((user) => (
              <Text textColor={"gray"} key={user._id}>
                {user._id === currentUser?._id ? "You" : user.username}
              </Text>
            ))}
          </HStack>
        </Box>
      </HStack>
      <IconButton
        color={"gray.400"}
        width={"fit-content"}
        height={"20px"}
        padding={0}
        aria-label={"Chat menu"}
      >
        <Icon as={HiDotsVertical} />
      </IconButton>
    </HStack>
  );
};

export default ChatHeader;
