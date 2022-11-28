import React from "react";
import CarouselFadeExample from "../../layouts/Carousel";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <CarouselFadeExample carouselItems={carouselItems} />
      <Category title="Categories" />
      <Banner />
    </>
  );
};

export default Home;

export const carouselItems = [
  {
    img: "https://demoxml.com/html/maxshop/images/slider-1.jpg",
    title: "NEW WAY TO PURCHASE YOUR PRODUCTS",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit amet consectetur",
  },
  {
    img: "https://demoxml.com/html/maxshop/images/slider-1.jpg",
    title: "NEW WAY ",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit amet consectetur",
  },
  {
    img: "https://demoxml.com/html/maxshop/images/slider-1.jpg",
    title: "PURCHASE YOUR PRODUCTS",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit amet consectetur",
  },
];

// export const carouselItem = [
//   {
//     img: "https://images.unsplash.com/photo-1669123547602-b85454d7ee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//     title: "NEW WAY TO PURCHASE YOUR PRODUCTS",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit amet consectetur",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1669123547602-b85454d7ee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//     title: "NEW WAY ",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit amet consectetur",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1669123547602-b85454d7ee84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
//     title: "PURCHASE YOUR PRODUCTS",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi et neque nisi, incidunt quisquam. Lorem, ipsum dolor sit amet consectetur",
//   },
// ];
