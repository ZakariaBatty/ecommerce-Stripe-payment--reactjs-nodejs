/** @format */

import React, { useContext, useState, useEffect } from "react";
import Layout from "../../shared/layout";
import { withRouter } from "react-router-dom";
import { ProductsContext } from "../../../context/products-context";
import "./single-product.styles.scss";

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.products.find(
      (item) => Number(item.id) === Number(id)
    );

    //  if product does not exist,redict to shop page
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
