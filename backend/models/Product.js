const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is Required"] },
  price: { type: String, required: [true, "Price is Required"] },
  category: { type: String },
  userId: { type: String, required: [true, "Id Required"] },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
