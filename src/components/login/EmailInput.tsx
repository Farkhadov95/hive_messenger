import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const EmailInput = () => {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" name="email" />
    </FormControl>
  );
};

export default EmailInput;
