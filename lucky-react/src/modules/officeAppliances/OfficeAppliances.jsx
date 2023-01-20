import { Box } from "@chakra-ui/react";
import React from "react";
// import { createContext } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductList from "../../components/product/ProductList";
// import productData from "../../data";
import { ProductContext } from "../../contexts/productContext";

export default function OfficeAppliances() {
  return (
    // <ProductContext.Provider value={productData}>
    <ProductContext.Provider value="deger">
      <Box background="#F8F8F8">
        <Header />
        <ProductList />
        <Footer />
      </Box>
    </ProductContext.Provider>
    // </ProductContext.Provider>
  );
}
