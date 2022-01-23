const mongoose = require("mongoose");

const productSchema = require("../schemas/productSchema");

const Product = mongoose.model("product", productSchema);

module.exports = Product;
