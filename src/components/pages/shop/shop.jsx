import React, { useContext } from 'react';

import './shop.styles.scss';
import Layout from '../../shared/layout';

import { ProductsContext } from '../../../context/entities/ProductsContext';

import FeaturedProduct from '../../shared/featured-product';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
};

export default Shop;
