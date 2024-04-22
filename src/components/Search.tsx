import { InputGroup, InputLeftElement, Icon, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <InputGroup
      overflow={"hidden"}
      maxWidth={"400px"}
      display={{ base: "none", md: "block" }}
    >
      <InputLeftElement pointerEvents="none">
        <Icon as={FaSearch} />
      </InputLeftElement>
      <Input
        border={"1px solid"}
        type="text"
        aria-label="search"
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default Search;
