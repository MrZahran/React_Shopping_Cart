import React, { useState } from "react";
import "../../css/CheckoutForm/Checkout.css";

function CheckoutForm(props) {
  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
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
              <button type="submit">Check out</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
