import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {
  Box,
  Button,
  Img,
  SimpleGrid,
  Stack,
  Flex,
  Container,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function SignUp() {
  return (
    <>
      <Header />
      <Box backgroundColor="var(--bgOrange)" py={{ base: 0, md: "60px" }}>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 3fr" }} spacing={5}>
          <Stack
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            alignItems="center"
            rowGap={3}
            order={{ base: 2, md: 1 }}
          >
            <Img src="https://los.az/lucky/images/logo/logo-header.svg" />
            <Button
              padding="25px 40px"
              colorScheme="white"
              color="#000"
              background="#FFF"
              _hover={{
                background: "var(--bgGreen)",
                color: "#FFFFFF",
              }}
            >
              <Link to={ROUTES.LOGIN} className="light">
                Daxil ol
              </Link>
            </Button>
          </Stack>
          <Box
            backgroundColor="white"
            py={10}
            borderTopLeftRadius={{ base: "0", md: "20% 50%", xl: "20% 50%" }}
            borderBottomLeftRadius={{ base: "0", md: "20% 50%", xl: "20% 50%" }}
            order={{ base: 1, md: 2 }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              as="h1"
              color="#303030"
              fontWeight="bold"
              fontSize="24px"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                width: "30px",
                height: "4px",
                top: "40px",
                left: "49%",
                background: "var(--bgGreen)",
                borderRadius: "2px",
              }}
            >
              Qeydiyyat
            </Flex>
            <Container maxW="90%">
              <SimpleGrid
                templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
                spacing={{ base: 0, md: 5 }}
              >
                <Stack spacing={3} my={10}>
                  <Input
                    placeholder="Şirkətin adı*"
                    type="text"
                    required
                    size="lg"
                    _focus={{
                      outline: "none",
                      bg: "white",
                      boxShadow: "outline",
                      borderColor: "gray.300",
                    }}
                  />
                  <Input placeholder="Ünvan*" type="text" required size="lg" />
                  <Input
                    placeholder="Şifrə*"
                    type="password"
                    required
                    size="lg"
                  />
                  <Input
                    placeholder="Şifrəni təsdiqlə*"
                    type="password"
                    required
                    size="lg"
                  />
                </Stack>
                <Stack spacing={3} my={10}>
                  <Input
                    placeholder="Əlaqəli şəxs*"
                    type="text"
                    required
                    size="lg"
                    _focus={{
                      outline: "none",
                      bg: "white",
                      boxShadow: "outline",
                      borderColor: "gray.300",
                    }}
                  />
                  <Input
                    placeholder="E-poçt ünvanı*"
                    type="email"
                    required
                    size="lg"
                  />
                  <Input placeholder="Telefon*" type="tel" required size="lg" />
                </Stack>
              </SimpleGrid>
              <Flex justifyContent="center" alignItems="center" my={8}>
                <Button
                  padding="25px 50px"
                  color="#FFF"
                  background="var(--bgOrange)"
                  _hover={{
                    background: "var(--bgGreen)",
                    color: "#FFFFFF",
                  }}
                >
                  <Link to="#" className="light">
                    Qeydiyyat
                  </Link>
                </Button>
              </Flex>
            </Container>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}
