import { VStack, HStack, Button, Box } from "@chakra-ui/react";
import EmailInput from "../components/login/EmailInput";
import NameInput from "../components/login/NameInput";
import PasswordInput from "../components/login/PasswordInput";
import Logo from "../components/login/Logo";
import ConfPasswordInput from "../components/login/ConfPasswordInput";
import { NavLink } from "react-router-dom";
import { routes } from "../router/routes";

const SignUp = () => {
  return (
    <VStack paddingTop={"10vh"}>
      <Logo />
      <Box
        as="form"
        width={"400px"}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <ConfPasswordInput />

        <HStack mt={3} justify={"space-between"}>
          <Button variant={"outline"} as={NavLink} to={routes.login}>
            or Log in
          </Button>
          <Button variant={"outline"} colorScheme="orange">
            Sign up
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default SignUp;
