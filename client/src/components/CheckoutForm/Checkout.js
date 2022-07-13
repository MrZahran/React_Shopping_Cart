import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import "../../css/CheckoutForm/Checkout.css";

function CheckoutForm(props) {
  const [order, setOrder] = useState(false);

  const submitOrder = (e) => {
    e.preventDefault();

    setOrder({
      name: value.name,
      email: value.email,
    });
  };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span onClick={() => props.setShowForm(false)} className="close-icon">
            &times;
          </span>
          <form onSubmit={(e) => submitOrder(e)}>
            <div>
              <label>Name</label>
              <input onChange={handleChange} type="text" name="name" required />
            </div>
            <div>
              <label>E-mail</label>
              <input onChange={handleChange} type="text" name="email" />
            </div>
            <div>
              <button onChange={submitOrder} type="submit">
                Check out
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Order Modal */}
      <Modal isOpen={order} onRequestClose={() => setOrder(false)}>
        <div className="order-info">
          <span onClick={() => setOrder(false)} className="close-icon">
            &times;
          </span>
          <h2>Checkout Info</h2>
          <div>Name:{order.name}</div>
          <div>Email: {order.email}</div>
          {console.log(props.cartItems)}
          {props.cartItems.map((item) => (
            <div>
              <p>Product Name: {item.title}</p>
              <p>Price: {item.price}</p>
              <p>-----------------------</p>
            </div>
          ))}
          <div className="total">
            Total : $
            {props.cartItems.reduce((acc, b) => {
              return acc + b.price;
            }, 0)}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default connect((state) => {
  return {
    cartItems: state.cart.cartItems,
  };
})(CheckoutForm);
