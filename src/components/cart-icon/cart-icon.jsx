import React from 'react';
import shopping from '../../assets/sale.png';
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shopping} alt="shopping-cart-icon" />
      <span className="cart-count">5</span>
    </div>
  );
};

export default CartIcon;
