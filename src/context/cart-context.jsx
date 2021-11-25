/** @format */

import React, { createContext, useReducer } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

//@ state
const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //@ function for add product
  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });

  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });

  //@ return state
  const contextValues = {
    ...state,
    addProduct,
    increase,
  };

  //@ return jsx
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
