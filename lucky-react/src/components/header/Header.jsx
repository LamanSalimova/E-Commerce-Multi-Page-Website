import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./headerMiddle/HeaderMiddle";
import HeaderBottom from "./headerBottom/HeaderBottom";
import { Box } from "@chakra-ui/react";

export default function Header({ setSearchTerm }) {
  return (
    <Box
      background="var(--bgOrange)"
      backgroundImage="url(https://los.az/lucky/images/pattern/leaf-header-1.png)"
      backgroundPosition="top right"
      backgroundRepeat="no-repeat"
      pt={5}
    >
      <HeaderTop />
      <HeaderMiddle setSearchTerm={setSearchTerm} />
      <HeaderBottom />
    </Box>
  );
}
