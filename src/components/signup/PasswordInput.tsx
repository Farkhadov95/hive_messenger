import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import hookForm from "../../utils/hookForm";
import { NewUserForm } from "../../types/user";

type Props = {
  register: UseFormRegister<NewUserForm>;
  errors: FieldErrors<NewUserForm>;
};

const PasswordInput = ({ register, errors }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <Input
        border={"1px solid"}
        placeholder="Password"
        borderColor={errors.password ? "red.300" : "gray.300"}
        {...register("password", {
          required: hookForm.required,
        })}
      />
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.password?.message}
      </Text>
    </FormControl>
  );
};

export default PasswordInput;
