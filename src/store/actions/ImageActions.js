import { getImageProducts } from "../../services/imageServices";
import { imageData } from "../../utils/data";

export const getImages = () => (dispatch) => {
  dispatch({
    type: "GET_IMAGE_PRODUCTS",
    payload: imageData,
  });
  // getImageProducts()
  // .then((response) => {
  //   dispatch({
  //     type: "GET_IMAGE_PRODUCTS",
  //     payload: response,
  //   });
  //   return console.log(response);
  // })
  // .catch((error) => {
  //   alert("Something went wrong");
  //   console.error(error);
  // });
};
