import React, { useContext } from 'react';
import shopping from 'assets/sale.png';
import { CartContext } from 'context/entities/CartContext';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { itemCount, logCart } = useContext(CartContext);
  
  logCart("CartIcon");
  return (
    <div className="cart-container">
      <img src={shopping} alt="shopping-cart-icon" />
      {itemCount > 0 ? <span className="cart-count"> {itemCount} </span> : null}
    </div>
  );
};

export default CartIcon;
