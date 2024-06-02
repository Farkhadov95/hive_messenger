import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import { UserRes } from "../../types/user";

type Props = {
  users: UserRes[];
  handleSelect: (users: string) => void;
  selectedUserIDs: string[];
};

const ChatUsersAddList = ({ users, handleSelect, selectedUserIDs }: Props) => {
  const handleClick = (userID: string) => {
    handleSelect(userID);
  };

  return (
    <VStack alignItems={"flex-start"} gap={1}>
      {users.map((user) => (
        <HStack
          key={user._id}
          gap={0}
          border={"1px solid"}
          width={"100%"}
          boxSizing="border-box"
          padding={2}
          borderRadius={5}
          bgColor={selectedUserIDs.includes(user._id) ? "orange" : "gray.300"}
          color={"black"}
          position={"relative"}
          onClick={() => handleClick(user._id)}
        >
          <Box>
            <HStack gap={1}>
              <Text fontWeight={"bolder"}>{user.username}</Text>
            </HStack>
            <Text>{user.email}</Text>
          </Box>
        </HStack>
      ))}
    </VStack>
  );
};

export default ChatUsersAddList;
