import { VStack, HStack, Button, Box } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../router/routes";
import { CurrentUser, NewUserForm } from "../types/user";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/user";
import EmailInput from "../components/signup/EmailInput";
import NameInput from "../components/signup/NameInput";
import PasswordInput from "../components/signup/PasswordInput";
import ConfPasswordInput from "../components/signup/ConfPasswordInput";
import Logo from "../components/login/Logo";

const SignUp = () => {
  const form = useForm<NewUserForm>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const handleSuccess = (userData: CurrentUser, token: string) => {
    localStorage.setItem("X-Auth-Token", token);
    console.log(userData);
    navigate("/");
  };

  const onSubmit = (data: NewUserForm) => {
    const adjustedData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    registerUser(adjustedData)
      .then((data) =>
        handleSuccess(
          {
            username: data.username,
            email: data.email,
            _id: data._id,
            isAdmin: data.isAdmin,
          },
          data.token
        )
      )
      .catch((err) => console.log(err.message));
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
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <ConfPasswordInput
          register={register}
          errors={errors}
          passwordValue={form.getValues("password")}
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
