import React, { useContext } from 'react';

import { ProductsContext } from '../../context/entities/ProductsContext';

import FeaturedProduct from '../shared/featured-product';

const FeaturedCollection = () => {
    const { products } = useContext(ProductsContext);

    const productItems = products
        .slice(0, 4)
        .map(product => <FeaturedProduct {...product} key={product.id} />);

    return (
        <div className="featured-collection container">
            <h2 className="featured-section-title">Featured collection</h2>
            <div className="products">{productItems}</div>
        </div>
    );
};

export default FeaturedCollection;
