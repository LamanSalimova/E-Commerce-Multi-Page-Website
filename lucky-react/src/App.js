import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./modules/home/Main";
import About from "./modules/about/About";
import BestSeller from "./modules/bestSellers/BestSeller";
import Contact from "./modules/contact/Contact";
import Discounts from "./modules/discounts/Discounts";
import Login from "./components/login/Login";
import New from "./modules/new/New";
import SignUp from "./components/signup/SignUp";
import RefundExchange from "./modules/conditions/RefundExchange";
import Delivery from "./modules/conditions/Delivery";
import OfficeAppliances from "./modules/officeAppliances/OfficeAppliances";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Favorites from "./components/favorites/Favorites";
import { data } from "./data";
import { foodDrinks } from "./foodDrinks";

export const ProductContext = createContext();

function App() {
  const [state, setState] = useState({
    productList: data,
    foodDrinkList: foodDrinks,
    cart: [],
  });

  const addToCart = (book) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increase = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  //   const [searchTerm,setSearchTerm] = useState("");

  //   const search = (book) => {
  //     setState({
  //       ...state,
  //       cart: state.cart.filter((cartItem) =>{
  // if(searchTerm==""){
  //   return book;
  // }else if(book.name.toLowerCase().includes(searchTerm.toLowerCase())){
  //   return val;
  // }

  //       }

  //       ),
  //     });
  //   };

  return (
    <ProductContext.Provider
      value={{
        state: state,
        addToCart,
        increase,
        decrease,
        removeFromCart,
      }}
    >
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.MAIN} element={<Main />} exact />
            <Route path={ROUTES.ABOUT} element={<About />} exact />
            <Route path={ROUTES.NEW} element={<New />} exact />
            <Route path={ROUTES.BESTSELLERS} element={<BestSeller />} exact />
            <Route
              path={ROUTES.REFUNDEXCHANGE}
              element={<RefundExchange />}
              exact
            />
            <Route path={ROUTES.DELIVERY} element={<Delivery />} exact />
            <Route path={ROUTES.CONTACT} element={<Contact />} exact />
            <Route path={ROUTES.DISCOUNTS} element={<Discounts />} exact />
            <Route path={ROUTES.LOGIN} element={<Login />} exact />
            <Route path={ROUTES.SIGNUP} element={<SignUp />} exact />
            <Route
              path={ROUTES.OFFICEAPPLIANCES}
              element={<OfficeAppliances />}
              exact
            />
            <Route
              path={ROUTES.SHOPPINGCART}
              element={<ShoppingCart />}
              exact
            />
            <Route path={ROUTES.FAVORITES} element={<Favorites />} exact />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ProductContext.Provider>
  );
}

export default App;
