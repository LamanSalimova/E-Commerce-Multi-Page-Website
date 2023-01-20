import {
  Box,
  Img,
  Text,
  Button,
  Stack,
  Container,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../App";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function ProductList() {
  const context = useContext(ProductContext);
  // console.log(context);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <Box
        width="full"
        bgColor="#F8F8F8"
        // bgImage={leafRightImg}
        py={10}
        backgroundRepeat="no-repeat"
        backgroundPosition="top right"
        backgroundSize="contain"
      >
        <Text
          as="h1"
          my={8}
          fontSize="24px"
          position="relative"
          align="center"
          _before={{
            content: '""',
            position: "absolute",
            width: "30px",
            height: "4px",
            top: "30px",
            left: "49%",
            background: "var(--bgGreen)",
            borderRadius: "2px",
          }}
        >
          Endirimli Məhsullar
        </Text>
        <Container className="container" maxW="90%" my={8} pb={5} gap={3}>
          <SimpleGrid
            templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            {context.state.productList
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
                return false;
              })
              .map((book) => (
                <Stack
                  maxW={["90%", "95%", "95%"]}
                  //   height="430px"
                  p={3}
                  mb={7}
                  key={book.id}
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  background="#FFF"
                  overflow="hidden"
                  position="relative"
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    width="full"
                    height="200px"
                    overflow="hidden"
                    mt={7}
                    pt={10}
                  >
                    <Img
                      src={book.image}
                      alt={book.name}
                      _hover={{
                        transform: "scale(1.1)",
                        transition: "0.5s",
                      }}
                      width="70%"
                      height="100%"
                      //   object-fit="cover"
                    />
                  </Flex>
                  <Text
                    color="#212529"
                    fontSize="16px"
                    fontWeight="500"
                    width="full"
                    height="18%"
                    textAlign="center"
                    py={4}
                  >
                    {book.name}
                  </Text>
                  <Text
                    color="#212529"
                    fontSize="18px"
                    fontWeight="500"
                    textAlign="center"
                  >
                    {book.price} Azn
                  </Text>
                  <Box textAlign="center">
                    <Button
                      width="90%"
                      padding="25px 60px"
                      color="#"
                      variant="outline"
                      _hover={{ background: "var(--bgGreen)", color: "#FFF" }}
                      onClick={() => context.addToCart(book)}
                    >
                      Səbətə at
                    </Button>
                  </Box>
                  <Box
                    position="absolute"
                    top={5}
                    right={5}
                    cursor="pointer"
                    pb={3}
                    onClick={handleClick}
                  >
                    {click ? (
                      <Img src="https://los.az/lucky/images/icon/heart-filled.svg" />
                    ) : (
                      <Img src="https://los.az/lucky/images/icon/heart-outline.svg" />
                    )}
                  </Box>
                  <Box position="absolute" top={5} left={5}>
                    <Box
                      bgColor="var(--bgGreen)"
                      color="#FFF"
                      padding="5px 20px"
                      borderRadius="5px"
                    >
                      Tövsiyə edilir
                    </Box>
                  </Box>
                </Stack>
              ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
