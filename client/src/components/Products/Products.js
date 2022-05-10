import React, { useEffect, useState } from "react";
import "../../css/Products/Products.css";
import ProductModel from "./ProductModel";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";

function Products(props) {
  const [product, setProduct] = useState("");

  function openModal(product) {
    setProduct(product);
  }

  function closeModal() {
    setProduct(false);
  }

  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <div className="products-wrapper">
      {props.products && props.products.length
        ? props.products.map((product) => (
            <div className="product-item" key={product._id}>
              <a href="##" onClick={() => openModal(product)}>
                <img src={product.imgUrl} alt={product.title} />
              </a>
              <h2>{product.title}</h2>
              <div className="product-details">
                <div>{product.desc}</div>
                <span>${product.price}</span>
              </div>
              <button onClick={() => props.addToCart(product)}>
                Add to cart
              </button>
              {/* {console.log(product._id)} */}
              {/* {console.log(product)} */}
            </div>
          ))
        : "Loading..."}
      <ProductModel product={product} closeModal={closeModal} />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      products: state.products.filterProducts,
    };
  },
  { fetchProducts }
)(Products);
