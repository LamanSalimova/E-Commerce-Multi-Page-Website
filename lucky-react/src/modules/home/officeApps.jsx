import { Container, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function officeApps() {
  const officeAppData = [
    {
      id: 1,
      image: require("../../assets/images/partners/logo1.png"),
    },
    {
      id: 2,
      image: require("../../assets/images/partners/logo2.png"),
    },
    {
      id: 3,
      image: require("../../assets/images/partners/logo3.png"),
    },
    {
      id: 4,
      image: require("../../assets/images/partners/logo4.png"),
    },
    {
      id: 5,
      image: require("../../assets/images/partners/logo5.png"),
    },
    {
      id: 6,
      image: require("../../assets/images/partners/logo6.png"),
    },
    {
      id: 7,
      image: require("../../assets/images/partners/logo7.png"),
    },
    {
      id: 8,
      image: require("../../assets/images/partners/logo1.png"),
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <Container className="container" maxW={["90%", "80%", "80%"]} my={8} pb={5}>
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
        Brendlərimiz
      </Text>

      <Slider {...settings}>
        {partnerData?.map((item, index) => {
          return (
            <Flex alignItems="center" justifyContent="center" key={index}>
              <Img src={item.image} />
            </Flex>
          );
        })}
      </Slider>
    </Container>
  );
}
