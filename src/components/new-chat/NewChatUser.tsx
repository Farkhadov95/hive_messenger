import { Text, VStack } from "@chakra-ui/react";
import { UserRes } from "../../types/user";

type Props = {
  user: UserRes;
};

const NewChatUser = ({ user }: Props) => {
  return (
    <VStack
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
      <Text fontWeight={"bolder"}>{user.username}</Text>
      <Text>{user.email}</Text>
    </VStack>
  );
};

export default NewChatUser;
