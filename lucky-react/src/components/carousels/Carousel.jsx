import { Container } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bannerImg1 from "../../../src/assets/images/slider/banner3.jpg";
import bannerImg2 from "../../../src/assets/images/slider/banner2.jpg";
import bannerImg3 from "../../../src/assets/images/slider/banner1.jpg";
import bannerImg4 from "../../../src/assets/images/slider/banner4.jpg";
function UncontrolledExample() {
  return (
    <Container className="container" maxW="90%" padding={0} my={12}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default UncontrolledExample;
