import { IconButton, Icon } from "@chakra-ui/react";
import { IoPersonAdd } from "react-icons/io5";

const NewChat = () => {
  return (
    <IconButton
      aria-label="new chat"
      bgColor={"orange"}
      width={"50px"}
      height={"50px"}
      borderRadius={"50%"}
      position={"absolute"}
      bottom={"10px"}
      right={"10px"}
      zIndex={1}
    >
      <Icon as={IoPersonAdd} />
    </IconButton>
  );
};

export default NewChat;
