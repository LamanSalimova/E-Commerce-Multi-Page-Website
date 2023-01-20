import { Stack, Box, Text, Img, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function ProductCard({ productItems }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    increment();
  };

  return (
    <>
      {productItems.map((productItems, addToCart) => {
        return (
          <Stack
            key={productItems.id}
            justifyContent="center"
            alignItems="center"
            background="#FFF"
            padding="30px"
            overflow="hidden"
            position="relative"
          >
            <Box width="full" height="full">
              <Img
                src={productItems.image}
                alt={productItems.name}
                _hover={{
                  transform: "scale(1.1)",
                  transition: "0.5s",
                }}
                pb={6}
                width="full"
                height={{ base: "full", md: "70vh" }}
              />
            </Box>
            <Text color="#212529" fontSize="18px" fontWeight="500">
              {productItems.name}
            </Text>
            <Text color="#212529" fontSize="18px" fontWeight="500">
              {productItems.price}
            </Text>
            <Button
              width="80%"
              padding="30px 0"
              color="#"
              variant="outline"
              _hover={{ background: "var(--bgGreen)", color: "#FFF" }}
              onClick={() => addToCart(productItems)}
            >
              Səbətə at
            </Button>
            <Box
              position="absolute"
              top={5}
              right={5}
              cursor="pointer"
              onClick={handleClick}
            >
              {click ? (
                <Img src="https://los.az/lucky/images/icon/heart-filled.svg" />
              ) : (
                <Img src="https://los.az/lucky/images/icon/heart-outline.svg" />
              )}
            </Box>
          </Stack>
        );
      })}
    </>
  );
}
