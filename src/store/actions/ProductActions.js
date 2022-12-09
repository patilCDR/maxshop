import { getHomeProducts } from "../../services/ProductServices";

export const getProducts = (type, token) => (dispatch) => {
  getHomeProducts()
    .then((response) => {
      dispatch({
        type: "GET_HOME_PRODUCTS",
        payload: response.data,
      });
      return console.log(response);
    })
    .catch((error) => {
      alert("Something went wrong");
      console.error(error);
    });
};
