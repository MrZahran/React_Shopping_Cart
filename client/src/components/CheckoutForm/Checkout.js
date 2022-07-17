import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import "../../css/CheckoutForm/Checkout.css";
import { createOrder, clearOrder } from "../../store/actions/orders";

function CheckoutForm(props) {
  const [order, setOrder] = useState(false);

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };

    props.createOrder(order);
  };

  // if (props.order) {
  //   console.log(props.order.name);
  // }

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModal = () => {
    props.clearOrder();
    props.setShowForm(false);
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
      <Modal isOpen={props.order} onRequestClose={closeModal}>
        <div className="order-info">
          <span onClick={closeModal} className="close-icon">
            &times;
          </span>
          <h2>Checkout Info</h2>

          {props.order && <div>Name:{props.order.name}</div>}
          {props.order && <div>Email: {props.order.email}</div>}

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

export default connect(
  (state) => {
    return {
      order: state.order.order,
      cartItems: state.cart.cartItems,
    };
  },
  { createOrder, clearOrder }
)(CheckoutForm);
