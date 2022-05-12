import React, { useState } from "react";
import { connect } from "react-redux";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/Checkout";
import { removeCart } from "../../store/actions/cart";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="cart-wrapper">
      <h2>
        {props.cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}
      </h2>
      <hr />
      <div className="items-wrapper">
        {props.cartItems.map((item) => (
          <div className="cart-info">
            <img src={item.imgUrl} alt={item.title} />
            <div>
              <div className="item-details">
                <p>title: {item.title}</p>
                <p>qty: {item.qty}</p>
                <p>price: ${item.price}</p>
              </div>
              <button onClick={() => props.removeCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {props.cartItems.length && (
        <div className="cart-bottom">
          <div className="total">
            Total : $
            {props.cartItems.reduce((acc, b) => {
              return acc + b.price;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>Select Items</button>
        </div>
      )}

      <CheckoutForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart }
)(Cart);
