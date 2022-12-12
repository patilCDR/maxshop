import { getTable } from "../../services/TableServices";

export const getTableData = () => (dispatch) => {
  // we are calling API here
  getTable()
    .then((response) => {
      // If the API call is Success we are Connecting to "Reducer"
      dispatch({
        type: "GET_TABLE",
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
