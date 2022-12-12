export const Increment = (count) => (dispatch) => {
  dispatch({
    type: "INCREMENT",
    payload: count,
  });
};
export const Decrement = (count) => (dispatch) => {
  dispatch({
    type: "DECREMENT",
    payload: count,
  });
};
