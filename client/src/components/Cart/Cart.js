import React from "react";
import "../../css/Cart/Cart.css";

function Cart(props) {
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
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
