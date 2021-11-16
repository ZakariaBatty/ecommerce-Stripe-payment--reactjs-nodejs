import React, { useContext } from 'react';
import { isInCart } from '../helpers';
import { CartContext } from '../../context/cart-context';
import { withRouter } from 'react-router-dom';
import './featured-product.styles.scss';

const FeaturedProduct = props => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, description, id };
  const { addProduct, cartItems } = useContext(CartContext);

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => history.push(`/product/${id}`)}
      >
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        {/* Check if find product */}
        {!isInCart(product, cartItems) && (
          <button
            onClick={() => addProduct(product)}
            className="button is-black nomed-btn"
          >
            ADD TO CART
          </button>
        )}
        {isInCart(product, cartItems) && (
          <button
            id="btn-white-outline"
            onClick={() => {}}
            className="button is-black nomed-btn"
          >
            ADD MORE
          </button>
        )}
        {/* Check if find product */}
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
