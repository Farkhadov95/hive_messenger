import { Box } from "@chakra-ui/react";
import { MessageType } from "../../types/message";

interface Props {
  message: MessageType;
}

const UserMessage = ({ message }: Props) => {
  return (
    <Box
      bgColor={"gray"}
      width={"fit-content"}
      padding={1}
      borderRadius={"10px 10px 1px 10px"}
      alignSelf={"end"}
    >
      {message.content}
    </Box>
  );
};

export default UserMessage;
