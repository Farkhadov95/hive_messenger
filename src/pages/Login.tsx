import { VStack, Box, HStack, Button } from "@chakra-ui/react";
import Logo from "../components/Logo";
import EmailInput from "../components/login/EmailInput";
import PasswordInput from "../components/login/PasswordInput";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../router/routes";
import { loginUser } from "../services/user";
import { useForm } from "react-hook-form";
import { UserRes, User } from "../types/user";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const form = useForm<User>();
  const { register, handleSubmit, formState } = form;
  const setUser = useUserStore((state) => state.setCurrentUser);
  const { errors } = formState;

  const navigate = useNavigate();

  const handleSuccess = (userData: UserRes, token: string) => {
    sessionStorage.setItem("X-Auth-Token", token);
    setUser(userData);
    navigate(routes.main);
  };

  const onSubmit = (data: User) => {
    loginUser(data)
      .then((res) => {
        handleSuccess(
          {
            _id: res.data._id,
            username: res.data.username,
            email: res.data.email,
            isAdmin: res.data.isAdmin,
            createdAt: res.data.createdAt,
          },
          res.headers["x-auth-token"]
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <VStack marginTop={"10vh"}>
      <Logo />
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        width={{ base: "80vw", sm: "50vw", md: "50vw", lg: "40vw", xl: "30vw" }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />

        <HStack mt={3} justify={"space-between"}>
          <Button variant={"outline"} as={NavLink} to={routes.signup}>
            or Sign up
          </Button>
          <Button variant={"outline"} colorScheme="orange" type="submit">
            Log in
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Login;
