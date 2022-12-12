export default (state = {}, action) => {
  switch (action.type) {
    case "GET_IMAGE_PRODUCTS":
      return {
        ...state,
        getImageProducts: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
