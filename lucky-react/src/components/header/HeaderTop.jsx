import { Box, Flex } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
export default function HeaderTop() {
  return (
    <Box className="container" maxW="90%">
      <Flex className="flexEnd" width="full">
        <ButtonGroup className="registration">
          <Button
            colorScheme="white"
            variant={{ base: "link", md: "outline", xl: "outline" }}
            color="white"
            _hover={{
              background: "var(--bgGreen)",
              color: "#FFFFFF",
              border: "none",
            }}
          >
            <Link to={ROUTES.LOGIN} className="light">
              Daxil ol
            </Link>
          </Button>
          <Button
            colorScheme="white"
            color={{ base: "#FFFFFF", md: "#000", xl: "#000" }}
            background={{ base: "transparent", md: "#fff", xl: "#fff" }}
            _hover={{
              background: "var(--bgGreen)",
              color: "#FFFFFF",
            }}
          >
            <Link to={ROUTES.SIGNUP} className="light">
              Qeydiyyat
            </Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
