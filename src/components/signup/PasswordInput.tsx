import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import hookForm from "../../utils/hookForm";
import { NewUserForm } from "../../types/user";
import { Dispatch, SetStateAction } from "react";

type Props = {
  register: UseFormRegister<NewUserForm>;
  errors: FieldErrors<NewUserForm>;
  onInput: Dispatch<SetStateAction<string | undefined>>;
};

const PasswordInput = ({ register, errors, onInput }: Props) => {
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
        onChange={(e) => {
          e.preventDefault();
          onInput(e.target.value);
        }}
      />
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.password?.message}
      </Text>
    </FormControl>
  );
};

export default PasswordInput;
