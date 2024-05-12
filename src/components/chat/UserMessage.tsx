import { Box, Text } from "@chakra-ui/react";
import { MessageType } from "../../types/message";
import moment from "moment";

interface Props {
  message: MessageType;
}

const UserMessage = ({ message }: Props) => {
  return (
    <Box
      bgColor={"white"}
      color={"black"}
      width={"fit-content"}
      padding={1}
      borderRadius={"10px 10px 1px 10px"}
      alignSelf={"end"}
      position={"relative"}
      paddingBottom={"15px"}
      paddingRight={"20px"}
    >
      <Text>{message.content}</Text>
      <Text fontSize={"8px"} position={"absolute"} right={"2"} bottom={"1"}>
        {moment(message.createdAt).format("LT")}
      </Text>
    </Box>
  );
};

export default UserMessage;
