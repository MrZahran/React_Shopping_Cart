import React from "react";
import Modal from "react-modal";

function ProductModel(props) {
  const { product, closeModal } = props;

  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <div className="product-modal">
        <span onClick={closeModal}> &times; </span>
        <img src={product.imgUrl} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.desc}</p>
      </div>
    </Modal>
  );
}

export default ProductModel;
