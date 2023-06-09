import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
  category: "",
  cartItems: [],
  // quantity: 0,
};

export const productsReducer = (
  state = initialState,
  { type, payload },
  action
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  // console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };

//     case "INCREMENT":
//       return {
//         ...state,

//         cartItems: {
//           ...state.cartItems,
//           quantity: state.cartItems.quantity + 1,
//         },
//       };

//     case "DECREMENT":
//       return {
//         ...state,
//         cartItems: state.cartItems.map((item) => {
//           if (item.id === action.payload) {
//             return {
//               ...item,
//               quantity: state.cartItems.quantity - 1,
//             };
//           }
//           return item;
//         }),
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productToAdd = action.payload;
      const productAlreadyInCart = state.cartItems.find(
        (item) => item.id === productToAdd.id
      );

      // e.preventDefault();

      if (productAlreadyInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...productToAdd, quantity: 1 }],
          // cartItems:[]
        };
      }

  
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
  
    default:
      return state;
  }
};
