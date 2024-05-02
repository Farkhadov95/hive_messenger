import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Icon,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { sendMessage } from "../../services/chats";
import { useChatStore } from "../../store/chatStore";
import { useState } from "react";

const UserInput = () => {
  const currentChat = useChatStore((state) => state.currentChat);
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    try {
      const res = await sendMessage(currentChat?._id as string, message); // Pass message directly
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputGroup>
      <Input
        type={"text"}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <InputRightElement width="fit-content">
        <Button
          variant={"none"}
          width={"fit-content"}
          height={"auto"}
          p={0}
          onClick={handleSendMessage}
        >
          <Icon as={IoSend} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default UserInput;
