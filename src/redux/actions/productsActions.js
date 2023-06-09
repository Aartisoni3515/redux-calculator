import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

// export const addToCart = (item) => {
//   return {
//     type: "ADD_TO_CART",
//     payload: item,
//   };
// };

// export const removeFromCart = (itemId) => {
//   return {
//     type: "REMOVE_FROM_CART",
//     payload: itemId,
//   };
// };

// export const increment = (itemId) => {
//   return {
//     type: "INCREMENT",
//     payload: itemId,
//   };
// };

// export const decrement = (itemId) => {
//   return {
//     type: "DECREMENT",
//     payload: itemId,

//   };
// };

// export const checkout = (itemId) => {
//   return {
//     type: "CHECKOUT",
//     payload: itemId,

//   };
// };

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});

export const incrementQuantity = (productId) => ({
  type: "INCREMENT_QUANTITY",
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: "DECREMENT_QUANTITY",
  payload: productId,
});


// export const quantity = (productId) => ({
//   type: "QUANTITY",
//   payload: productId,
// });
