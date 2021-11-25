import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import './single-product.styles.scss';
import Layout from '../../shared/layout';

import { ProductsContext } from '../../../context/products-context';

import FeaturedCollection from '../../featured-collection';

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;

  const selectedProduct = products.find(item => Number(item.id) === Number(id));
  
  if (!selectedProduct) {
    push('/shop');
    return;
  }

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={selectedProduct.imageUrl} alt="product" />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{selectedProduct.title}</h3>
            <p>{selectedProduct.price}</p>
          </div>
          <div className="add-to-cart-btns">
            <button
              className="button is-white nomad-btn"
              id="btn-white-outline"
            >
              ADD TO CART
            </button>
            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="product-description">
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      </div>
      <FeaturedCollection />
    </Layout>
  )
};

export default withRouter(SingleProduct);
