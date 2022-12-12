import { getImageProducts } from "../../services/imageServices";

export const getImages = () => (dispatch) => {
  getImageProducts()
    .then((response) => {
      dispatch({
        type: "GET_IMAGE_PRODUCTS",
        payload: response.data,
      });
      return console.log(response);
    })
    .catch((error) => {
      alert("Something went wrong");
      console.error(error);
    });
};
