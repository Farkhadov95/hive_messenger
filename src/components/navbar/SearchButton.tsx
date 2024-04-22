import { Icon, Box } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  return (
    <Box display={{ base: "block", md: "none" }}>
      <Icon as={FaSearch} />
    </Box>
  );
};

export default SearchButton;
