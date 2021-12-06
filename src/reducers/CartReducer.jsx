/** @format */

export const calculateTotal = cartItems => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export const calculateItemsInCartCount = cartItems => cartItems.reduce((total, item) => total + item.quantity, 0);

export const getUpdatedCartItemsList = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state.cartItems, { ...action.payload, quantity: 1 }];
    case 'INCREASE_PRODUCT_COUNT_IN_CART':
      return state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case 'DECREASE_PRODUCT_COUNT_IN_CART':
      return state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state.cartItems;
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: getUpdatedCartItemsList(state, action),
        itemCount: calculateItemsInCartCount(getUpdatedCartItemsList(state, action)),
        total: calculateTotal(getUpdatedCartItemsList(state, action)),
      };
    case 'INCREASE_PRODUCT_COUNT_IN_CART':
      return {
        ...state,
        cartItems: getUpdatedCartItemsList(state, action),
        itemCount: calculateItemsInCartCount(getUpdatedCartItemsList(state, action)),
        total: calculateTotal(getUpdatedCartItemsList(state, action)),
      };
    case 'DECREASE_PRODUCT_COUNT_IN_CART':
      return {
        ...state,
        cartItems: getUpdatedCartItemsList(state, action),
        itemCount: calculateItemsInCartCount(getUpdatedCartItemsList(state, action)),
        total: calculateTotal(getUpdatedCartItemsList(state, action)),
      };
    case 'REMOVED_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        itemCount: calculateItemsInCartCount(state.cartItems.filter(item => item.id !== action.payload.id)),
        total: calculateTotal(state.cartItems.filter(item => item.id !== action.payload.id)),
      };
    default:
      return state;
  }
};

export default cartReducer;
