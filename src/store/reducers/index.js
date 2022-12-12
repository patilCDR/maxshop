import { combineReducers } from "redux";
import CartReducers from "./CartReducers";
import ImageReducers from "./ImageReducers";
import ProductReducers from "./ProductReducers";
import TableReducers from "./TableReducers";

// CombineReducers will store all the data (like API, constants, etc ) in the form of Object. and it will export to Provider
export default combineReducers({
  products: ProductReducers,
  table: TableReducers,
  cart: CartReducers,
  images: ImageReducers,
});

// Syntax
// export default combinReducers({
//   dummyFunction: () => 'someData'
// });
