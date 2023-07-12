import { Box, Container, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import React, { useContext } from "react";
import { ROUTES } from "../../../routes";
import Search from "./Search";
import { ProductContext } from "../../../App";

export default function HeaderMiddle({ setSearchTerm }) {
  const context = useContext(ProductContext);
  let basketItemCount = context.state.cart.length;

  return (
    <Container className="container" maxW="90%" pr={{ base: "0", md: 4 }}>
      <Flex
        justifyContent={{
          base: "space-evenly",
          md: "space-between",
          xl: "space-between",
        }}
        alignItems="center"
      >
        <Box>
          <Image src="https://los.az/lucky/images/logo/logo-header.svg" />
        </Box>
        <Search setSearchTerm={setSearchTerm} />
        <Box position="relative">
          <RouterLink to={ROUTES.SHOPPINGCART}>
            <FaShoppingCart fontSize="2rem" color="#fff" />
          </RouterLink>
          <Flex
            position="absolute"
            top="-5px"
            right="-10px"
            width="20px"
            height="20px"
            borderRadius="50%"
            backgroundColor="red"
            color="#fff"
            justifyContent="center"
            alignItems="center"
          >
            {basketItemCount}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
