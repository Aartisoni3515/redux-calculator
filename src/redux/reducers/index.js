import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { cartreducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cartreducer,
});
export default reducers;
