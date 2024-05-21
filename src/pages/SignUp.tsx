import { VStack, HStack, Button, Box } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../router/Routes";
import { UserRes, NewUserForm } from "../types/user";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/user";
import EmailInput from "../components/signup/EmailInput";
import NameInput from "../components/signup/NameInput";
import PasswordInput from "../components/signup/PasswordInput";
import ConfPasswordInput from "../components/signup/ConfPasswordInput";
import Logo from "../components/Logo";
import { useState } from "react";
import { useUserStore } from "../store/userStore";
import UserError from "../components/UserError";
import { useErrorStore } from "../store/errorStore";
import useErrorHandler from "../hooks/useError";

const SignUp = () => {
  const form = useForm<NewUserForm>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const [passwordValue, setPasswordValue] = useState<string>();
  const { handleUserFail } = useErrorHandler();

  const setUser = useUserStore((state) => state.setCurrentUser);
  const userError = useErrorStore((state) => state.userError);

  const handleSuccess = (userData: UserRes, token: string) => {
    sessionStorage.setItem("X-Auth-Token", token);
    setUser(userData);
    navigate(routes.home);
  };

  const onSubmit = (data: NewUserForm) => {
    const adjustedData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    registerUser(adjustedData)
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
        handleUserFail(err.message);
      });
  };

  return (
    <VStack marginTop={"10vh"}>
      {userError && <UserError error={userError} />}
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
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput
          register={register}
          errors={errors}
          onInput={setPasswordValue}
        />
        <ConfPasswordInput
          register={register}
          errors={errors}
          passwordValue={passwordValue}
        />

        <HStack mt={3} justify={"space-between"}>
          <Button variant={"outline"} as={NavLink} to={routes.login}>
            or Log in
          </Button>
          <Button variant={"outline"} colorScheme="orange" type="submit">
            Sign up
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default SignUp;
