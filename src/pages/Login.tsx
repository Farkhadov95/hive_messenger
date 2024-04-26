import { VStack, Box, HStack, Button } from "@chakra-ui/react";
import Logo from "../components/login/Logo";
import EmailInput from "../components/login/EmailInput";
import PasswordInput from "../components/login/PasswordInput";
import { NavLink } from "react-router-dom";
import { routes } from "../router/routes";

const Login = () => {
  return (
    <VStack paddingTop={"10vh"}>
      <Logo />
      <Box
        as="form"
        width={{ base: "80vw", sm: "50vw", md: "50vw", lg: "40vw", xl: "30vw" }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <EmailInput />
        <PasswordInput />

        <HStack mt={3} justify={"space-between"}>
          <Button variant={"outline"} as={NavLink} to={routes.signup}>
            or Sign up
          </Button>
          <Button variant={"outline"} colorScheme="orange">
            Log in
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Login;
