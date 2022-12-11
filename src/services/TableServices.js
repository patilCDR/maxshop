import axios from "axios";

export const getTable = () => {
  return axios.get("https://dummyjson.com/products?limit=10");
};
