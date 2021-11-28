/** @format */

export const sumItem = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.price * prod.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // check if item is in cart
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItem(state.cartItems),
      };
    case 'INCREASE':
      const updatedCartItems = state.cartItems.map(item => item.id === action.payload.id
        ? {...item, quantity: item.quantity+1}
        : item);

      return {
        ...state,
        cartItems: updatedCartItems, 
        ...sumItem(updatedCartItems),
      }
    default:
      return state;
  }
};

export default cartReducer;
