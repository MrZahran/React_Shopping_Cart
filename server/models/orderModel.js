const mongoose = require("mongoose");

const orderSchema = require("../schemas/orderSchema");

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
