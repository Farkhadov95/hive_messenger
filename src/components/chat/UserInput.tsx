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
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    try {
      setIsLoading(true);
      await sendMessage(currentChat?._id as string, message)
        .then(() => {
          setMessage("");
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputGroup as={"form"}>
      <Input
        value={message}
        type={"text"}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <InputRightElement width="fit-content">
        <Button
          variant={"none"}
          width={"fit-content"}
          height={"auto"}
          isDisabled={!message}
          isLoading={isLoading}
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
