import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const PasswordInput = () => {
  return (
    <FormControl>
      <FormLabel>Password</FormLabel>
      <Input type="password" name="password" />
    </FormControl>
  );
};

export default PasswordInput;
