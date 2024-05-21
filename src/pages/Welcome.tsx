import { Icon, Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GiTreeBeehive } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { routes } from "../router/Routes";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <VStack paddingY={"20vh"}>
      <Icon
        as={GiTreeBeehive}
        width={"100px"}
        height={"100px"}
        color={"orange"}
      />
      <Heading mb={5}>Welcome to Hive</Heading>
      <Button
        rightIcon={<IoIosArrowForward />}
        onClick={() => navigate(routes.chats)}
      >
        Start
      </Button>
    </VStack>
  );
};

export default Welcome;
