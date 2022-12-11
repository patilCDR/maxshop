export default (state = {}, action) => {
  switch (action.type) {
    case "GET_TABLE":
      return {
        ...state,
        getTable: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
