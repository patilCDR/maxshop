import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./jsx/components/Cart";
import Home from "./jsx/components/Home";
import Images from "./jsx/components/Home/Images";
import CarouselFadeExample from "./jsx/layouts/Carousel";
import Navbar from "./jsx/layouts/Navbar";
import ProductDetails from "./jsx/pages/ProductDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        {/* <Cart /> */}
        {/* <Images /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
