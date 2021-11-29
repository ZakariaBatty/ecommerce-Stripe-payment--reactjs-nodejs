/** @format */

import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import "./featured-product.styles.scss";

import { CartContext } from "../../context/entities/CartContext";

const FeaturedProduct = (props) => {
  const product = {
    title: props.title,
    imageUrl: props.imageUrl,
    price: props.price,
    id: props.id,
    description: props.description
  };

  const { addToCart, isInCart, increaseItemCountInCart } = useContext(CartContext);

  return (
    <div className="featured-product">
      <div
        className="featured-image"
        onClick={() => props.history.push(`/product/${product.id}`)}>
        <img src={product.imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h3>{product.title}</h3>
        <p>$ {product.price}</p>
        {
          !isInCart(product)
            ? (
              <button
                className="button is-black nomad-btn"
                onClick={() => addToCart(product)}>
                ADD TO CART
              </button>
            )
            : (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                onClick={() => increaseItemCountInCart(product)}>
                ADD MORE
              </button>
            )
        }
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
