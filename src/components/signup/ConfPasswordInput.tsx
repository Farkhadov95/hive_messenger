import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { NewUserForm } from "../../types/user";
import hookForm from "../../utils/hookForm";

type Props = {
  register: UseFormRegister<NewUserForm>;
  errors: FieldErrors<NewUserForm>;
  passwordValue: string;
};

const PasswordConfInput = ({ register, errors, passwordValue }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="conf_password">Confirm Password</FormLabel>
      <Input
        id="conf_password"
        type={"password"}
        border={"1px solid"}
        borderColor={errors.conf_password ? "red.300" : "gray.300"}
        placeholder="Confirm Password"
        {...register("conf_password", {
          required: hookForm.required,
          validate: (value) => {
            return value === passwordValue || "Passwords should be identical";
          },
        })}
      />
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.conf_password?.message}
      </Text>
    </FormControl>
  );
};

export default PasswordConfInput;
