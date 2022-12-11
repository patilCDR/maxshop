import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// "Provider" will receive the data from "CombineReducer" and provide/supply data to the jsx files which required
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// "Redux Thunk" will estimate the required time  for an API call
import reduxThunk from "redux-thunk";

//Pages
import App from "./App";

// "Combine Reducers" is imported as reducers
import reducers from "./store/reducers";

// "Create Store" will act as Bridge between "Provider" & "jsx files"
// "Apply Middleware" will make jsx files wait, based on the time estimated by "Redux Thunk"
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
