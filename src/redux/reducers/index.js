import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  cartReducer,
} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartItems: cartReducer,
});
export default reducers;
