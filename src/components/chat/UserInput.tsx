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
import { MessageType } from "../../types/message";
import { useMutation } from "@tanstack/react-query";
import { useSocketStore } from "../../store/socketStore";

interface Props {
  setAllMessages: (value: React.SetStateAction<MessageType[]>) => void;
}

const UserInput = ({ setAllMessages }: Props) => {
  const currentChat = useChatStore((state) => state.currentChat);
  const [message, setMessage] = useState("");
  const socket = useSocketStore((state) => state.socket);

  const handleSendMessage = useMutation({
    mutationFn: () => sendMessage(currentChat?._id as string, message),
    onSuccess: (data) => {
      setAllMessages((prev) => [...prev, data]);
      socket?.emit("new message", data);
      setMessage("");
    },
  });

  return (
    <InputGroup
      as={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage.mutate();
      }}
    >
      <Input
        value={message}
        type={"text"}
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <InputRightElement width="fit-content">
        <Button
          type="submit"
          variant={"none"}
          width={"fit-content"}
          height={"auto"}
          isDisabled={!message}
          isLoading={handleSendMessage.isPending}
          p={0}
        >
          <Icon as={IoSend} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default UserInput;
