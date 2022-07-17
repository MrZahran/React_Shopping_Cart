import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../store/actions/orders";

function Orders(props) {
  useEffect(() => {
    props.fetchOrders();
  }, []);

  const orders = props.orders;

  return (
    <div className="orders">
      {orders &&
        orders.map((order) => (
          <div key={order._id}>
            <div>{order.name}</div>
            <div>{order.email}</div>
            <div>--------------------------- </div>
          </div>
        ))}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      orders: state.order.orders,
    };
  },
  { fetchOrders }
)(Orders);
