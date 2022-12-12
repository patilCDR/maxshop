import React from "react";
import Cart from "./jsx/components/Cart";
import Home from "./jsx/components/Home";
import Images from "./jsx/components/Home/Images";
import CarouselFadeExample from "./jsx/layouts/Carousel";
import Navbar from "./jsx/layouts/Navbar";

const App = () => {
  return (
    <>
      <Images />
      <Navbar />
      <Home />
      <Cart />
    </>
  );
};

export default App;
