export default (state = {}, action) => {
  switch (action.type) {
    case "GET_IMAGE_PRODUCTS":
      console.log("imageReducer", action.payload);
      return {
        ...state,
        getImageProducts: [...action.payload],
      };
    default:
      return state;
  }
};
