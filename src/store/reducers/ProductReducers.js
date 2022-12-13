export default (state = {}, action) => {
  switch (action.type) {
    case "GET_HOME_PRODUCTS":
      console.log("productReducer", action.payload);
      return {
        ...state,
        getHomeProducts: {
          ...action.payload,
        },
      };
    case "GET_SINGLE_PRODUCT":
      console.log("productReducer", action.payload);
      return {
        ...state,
        getSingleProduct: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

// Syntax
// export default (state = {}, action) => {
// switch (action.type) {
//   case " ":
//     return {
//       ...state
//       },
//   default:
//     return state;
// }
// }
