import { HStack, Text } from "@chakra-ui/react";
import { useChatStore } from "../../store/chatStore";

const HeaderUsers = () => {
  const currentChat = useChatStore((state) => state.currentChat);

  const allUsers = currentChat?.users;

  return (
    <HStack gap={1} flexWrap={"wrap"} lineHeight={"0.8rem"} fontSize={"0.8rem"}>
      <Text textColor={"gray"}>{allUsers?.length} members</Text>
    </HStack>
  );
};

export default HeaderUsers;
