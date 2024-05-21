import { HStack, Text } from "@chakra-ui/react";
import { useChatStore } from "../../store/chatStore";
import { useUserStore } from "../../store/userStore";

const HeaderUsers = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const currentUser = useUserStore((state) => state.currentUser);

  const NAMES_TO_DISPLAY_LENGTH = 3;
  const allUsers = currentChat?.users;
  const isLong = allUsers && allUsers?.length > NAMES_TO_DISPLAY_LENGTH;

  return (
    <HStack
      gap={1}
      divider={
        <Text textColor={"gray"} ml={"-3px"}>
          ,
        </Text>
      }
      flexWrap={"wrap"}
      lineHeight={"0.8rem"}
      fontSize={"0.8rem"}
    >
      {allUsers?.slice(0, 3).map((user) => (
        <Text textColor={"gray"} key={user._id}>
          {user._id === currentUser?._id ? "You" : user.username}
        </Text>
      ))}
      {isLong && (
        <Text textColor={"gray"}>
          and {allUsers.length - NAMES_TO_DISPLAY_LENGTH} more
        </Text>
      )}
    </HStack>
  );
};

export default HeaderUsers;
