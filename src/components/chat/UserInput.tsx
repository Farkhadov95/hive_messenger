import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Icon,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

const UserInput = () => {
  return (
    <InputGroup>
      <Input type={"text"} placeholder="Message" />
      <InputRightElement width="fit-content">
        <Button variant={"none"} width={"fit-content"} height={"auto"} p={0}>
          <Icon as={IoSend} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default UserInput;
