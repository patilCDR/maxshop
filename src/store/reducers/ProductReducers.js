export default (state = {}, action) => {
  switch (action.type) {
    case "GET_HOME_PRODUCTS":
      return {
        ...state,
        getHomeProducts: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
