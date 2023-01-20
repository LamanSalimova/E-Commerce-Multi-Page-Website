import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React from "react";

export default function Search({ setSearchTerm }) {
  return (
    <div>
      <InputGroup
        width={{ md: "300px", xl: "400px" }}
        display={{ base: "none", md: "block", xl: "block" }}
      >
        <Input
          placeholder="Axtar"
          color="#fff"
          focusBorderColor="#fff"
          border="2px solid #fff"
          _placeholder={{ color: "#fff" }}
          onChange={(e) => console.log(setSearchTerm(e.target.value))}
        />
        <InputRightElement children={<FaSearch color="#fff" />} />
      </InputGroup>
    </div>
  );
}
