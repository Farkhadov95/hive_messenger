import { Box } from "@chakra-ui/react";
import { MessageType } from "../../types/message";

interface Props {
  message: MessageType;
}

const Message = ({ message }: Props) => {
  return (
    <Box
      bgColor={"white"}
      color={"black"}
      width={"fit-content"}
      padding={1}
      borderRadius={"10px 10px 10px 1px"}
    >
      {message.content}
    </Box>
  );
};

export default Message;
