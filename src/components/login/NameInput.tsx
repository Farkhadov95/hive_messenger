import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const NameInput = () => {
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input type="text" name="name" />
    </FormControl>
  );
};

export default NameInput;
