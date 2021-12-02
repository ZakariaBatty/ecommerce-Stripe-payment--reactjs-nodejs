/** @format */

import React, { createContext, useReducer } from 'react';
import cartReducer from 'reducers/CartReducer';

export const CartContext = createContext();

//@ state
const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //@ return state
  const contextValues = {
    ...state,
    addToCart: product => dispatch({ type: 'ADD_TO_CART', payload: product }),
    increaseItemCountInCart: product => dispatch({ type: 'INCREASE_PRODUCT_COUNT_IN_CART', payload: product }),
    decreaseItemCountInCart: product => dispatch({ type: 'DECREASE_PRODUCT_COUNT_IN_CART', payload: product }),
    removeFromCart: product => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
    isInCart: product => state.cartItems.find(item => item.id === product.id),
    logCart: from => console.log(state, { from }),
  };

  //@ return jsx
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
