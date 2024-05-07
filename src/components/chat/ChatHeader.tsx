import { Avatar, HStack, Box, Text, IconButton, Icon } from "@chakra-ui/react";
import { HiDotsVertical } from "react-icons/hi";
import { useChatStore } from "../../store/chatStore";
import { useUserStore } from "../../store/userStore";

const ChatHeader = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);
  return (
    <HStack
      padding={2}
      bgColor={"white"}
      justify={"space-between"}
      borderRadius={"0 0 10px 10px"}
    >
      <HStack textColor={"black"} gap={3}>
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
