import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const ConfPasswordInput = () => {
  return (
    <FormControl>
      <FormLabel>Confirm Password</FormLabel>
      <Input type="password" name="conf_password" />
    </FormControl>
  );
};

export default ConfPasswordInput;
