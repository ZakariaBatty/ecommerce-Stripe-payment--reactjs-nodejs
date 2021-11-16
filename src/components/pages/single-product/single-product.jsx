import React from 'react';
import Layout from '../../shared/layout';
import FeaturedProduct from '../../shared/featured-product';
import {ProductsContext} from '../../../context/products-context';
import './single-product.styles.scss';


const SingleProduct = () =>{

        return (
            <Layout>
                 
            </Layout>
        )
}

    //  if product does not exist,redict to shop page
    if (!product) {
      return push("/shop");
    }
    if (!product) {
      return push("/shop");
    }

    setProduct(product);
  });

  const { imageUrl, title, price, description } = product;
  return (
    <Layout>
      <div>
        <div>
          <img src={imageUrl} alt="product" />
        </div>
        <div>
          <div>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div>Ò
            <button>ADD TO CART</button>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
