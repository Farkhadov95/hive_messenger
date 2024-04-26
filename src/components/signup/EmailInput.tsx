import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { NewUserForm } from "../../types/user";
import hookForm from "../../utils/hookForm";

type Props = {
  register: UseFormRegister<NewUserForm>;
  errors: FieldErrors<NewUserForm>;
};

const EmailInput = ({ register, errors }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>Email address</FormLabel>
      <Input
        type="email"
        placeholder="example@mail.com"
        border={"1px solid"}
        borderColor={errors.email ? "red.300" : "gray.300"}
        {...register("email", {
          required: hookForm.required,
          pattern: hookForm.emailPattern,
        })}
      />
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.email?.message}
      </Text>
    </FormControl>
  );
};

export default EmailInput;
