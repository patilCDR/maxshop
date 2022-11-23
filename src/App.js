import React from "react";
import Home from "./jsx/components/Home";
import CarouselFadeExample from "./jsx/layouts/Carousel";
import Navbar from "./jsx/layouts/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <CarouselFadeExample />
      <Home />
      <center>Les's starts</center>
    </div>
  );
};

export default App;
