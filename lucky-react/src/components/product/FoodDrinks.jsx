import {
  Box,
  Img,
  Text,
  Button,
  Stack,
  Container,
  Flex,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../App";
// import leafLeftImg from "../../assets/images/leaf/leaf-office-left-1.png";
import leafRightImg from "../../assets/images/leaf/leaf-office-right-1.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductList() {
  const context = useContext(ProductContext);
  // console.log(context);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  var settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      width="full"
      bgColor="#F8F8F8"
      bgImage={leafRightImg}
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
        Qida və içkilər
      </Text>
      <Container className="container" maxW="90%" my={8} pb={5} gap={3}>
        <Slider {...settings} width="100%">
          {context.state.foodDrinkList.map((book) => (
            <Stack
              maxW="90%"
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
                // bgColor="red"
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
                  padding="30px"
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
            </Stack>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
