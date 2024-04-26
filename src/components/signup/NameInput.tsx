import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { NewUserForm } from "../../types/user";

type Props = {
  register: UseFormRegister<NewUserForm>;
  errors: FieldErrors<NewUserForm>;
};

const NameInput = ({ register, errors }: Props) => {
  return (
    <FormControl isRequired>
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        placeholder="Your name"
        border={"1px solid"}
        borderColor={errors.username ? "red.300" : "gray.300"}
        {...register("username", {
          required: {
            value: true,
            message: "Name is required",
          },
        })}
      />
      <Text fontSize={"small"} paddingX={1} color={"red.300"}>
        {errors.username?.message}
      </Text>
    </FormControl>
  );
};

export default NameInput;
