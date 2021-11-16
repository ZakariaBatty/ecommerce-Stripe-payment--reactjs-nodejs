import React, { useContext } from 'react';
import shopping from '../../assets/sale.png';
import { CartContext } from '../../context/cart-context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log('cartItems:', cartItems);
  return (
    <div className="cart-container">
      <img src={shopping} alt="shopping-cart-icon" />
      {itemCount > 0 ? <span className="cart-count"> {itemCount} </span> : null}
    </div>
  );
};

export default CartIcon;
