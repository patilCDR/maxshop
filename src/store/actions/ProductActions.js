import {
  getHomeProducts,
  getSingleProductDetails,
} from "../../services/ProductServices";

export const getProducts = () => (dispatch) => {
  // we are calling API here
  getHomeProducts()
    .then((response) => {
      // If the API call is Success we are Connecting to "Reducer"
      dispatch({
        type: "GET_HOME_PRODUCTS",
        payload: response.data,
      });
      return console.log(response);
    })
    // If not throw an error
    .catch((error) => {
      alert("Something went wrong");
      console.error(error);
    });
};

export const getSingleProduct = (id) => (dispatch) => {
  // we are calling API here
  getSingleProductDetails(id)
    .then((response) => {
      // If the API call is Success we are Connecting to "Reducer"
      dispatch({
        type: "GET_SINGLE_PRODUCT",
        payload: response.data,
      });
      return console.log(response);
    })
    // If not throw an error
    .catch((error) => {
      alert("Something went wrong");
      console.error(error);
    });
};
