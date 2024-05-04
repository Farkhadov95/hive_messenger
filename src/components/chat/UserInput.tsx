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
import { Socket } from "socket.io-client";
import { MessageType } from "../../types/message";

interface Props {
  socket: Socket;
  allMessages: MessageType[];
  setAllMessages: (value: React.SetStateAction<MessageType[]>) => void;
}

const UserInput = ({ socket, setAllMessages }: Props) => {
  const currentChat = useChatStore((state) => state.currentChat);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    try {
      setIsLoading(true);
      const newMessage = await sendMessage(currentChat?._id as string, message);
      setAllMessages((prev) => [...prev, newMessage]);
      socket.emit("new message", newMessage);
      setMessage("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <InputGroup
      as={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
    >
      <Input
        value={message}
        type={"text"}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <InputRightElement width="fit-content">
        <Button
          type="submit"
          variant={"none"}
          width={"fit-content"}
          height={"auto"}
          isDisabled={!message}
          isLoading={isLoading}
          p={0}
        >
          <Icon as={IoSend} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default UserInput;
