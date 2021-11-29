/** @format */

export const calculateTotal = (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export const calculateItemsInCartCount = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

export const getUpdatedCartItemsList = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state.cartItems, { ...action.payload, quantity: 1 }];
    case "INCREASE_PRODUCT_COUNT_IN_CART":
      return state.cartItems.map(item => item.id === action.payload.id
        ? { ...item, quantity: item.quantity + 1 }
        : item);
    default:
      return state.cartItems
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: getUpdatedCartItemsList(state, action),
        itemCount: calculateItemsInCartCount(getUpdatedCartItemsList(state, action)),
        total: calculateTotal(getUpdatedCartItemsList(state, action)),
      };
    case "INCREASE_PRODUCT_COUNT_IN_CART":
      return {
        ...state,
        cartItems: getUpdatedCartItemsList(state, action),
        itemCount: calculateItemsInCartCount(getUpdatedCartItemsList(state, action)),
        total: calculateTotal(getUpdatedCartItemsList(state, action)),
      };
    default:
      return state;
  }
};

export default cartReducer;
