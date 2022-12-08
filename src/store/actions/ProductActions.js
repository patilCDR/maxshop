import { getHomeProducts } from "../../services/ProductServices";

export const getProducts = (type, token) => (dispatch) => {
  getHomeProducts().then((response) => {
    return console.log(response);
  });
};
