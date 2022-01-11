import React from "react";
import "../../css/Products/Products.css";
function Products(props) {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.imgUrl} alt={product.title} />
          <h2>{product.title}</h2>
          <div className="product-details">
            <div>{product.desc}</div>
            <span>{product.price}</span>
          </div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
