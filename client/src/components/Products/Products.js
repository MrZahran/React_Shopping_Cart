import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModel from "./ProductModel";

function Products(props) {
  const [product, setProduct] = useState("");

  function openModal(product) {
    setProduct(product);
  }

  function closeModal() {
    setProduct(false);
  }

  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="##" onClick={() => openModal(product)}>
            <img src={product.imgUrl} alt={product.title} />
          </a>
          <h2>{product.title}</h2>
          <div className="product-details">
            <div>{product.desc}</div>
            <span>{product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}

      <ProductModel product={product} closeModal={closeModal} />
    </div>
  );
}

export default Products;
