import axios from "axios";

export const getHomeProducts = () => {
  return axios.get("https://dummyjson.com/products?limit=12");
};

export const getSingleProductDetails = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};
