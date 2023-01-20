import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../components/carousels/Carousel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sections from "../../components/sectionsPage/Sections";
import Section2 from "../../components/sectionsPage/Section2";

import ProductList from "../../components/product/ProductList";
import FoodDrinks from "../../components/product/FoodDrinks";
import Partners from "../../components/partners/Partners";
export default function Main() {
  return (
    <Box background="#F8F8F8">
      <Header />
      <Carousel />
      <ProductList />
      <Sections />
      <FoodDrinks />
      <Section2 />
      <Partners />
      <Footer />
    </Box>
  );
}
