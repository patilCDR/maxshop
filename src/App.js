import React from "react";
import Cart from "./jsx/components/Cart";
import Home from "./jsx/components/Home";
import CarouselFadeExample from "./jsx/layouts/Carousel";
import Navbar from "./jsx/layouts/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Cart />
    </>
  );
};

export default App;
