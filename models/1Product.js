const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: {
    type:String,
    required: true,
    unique:true
  },
  price: {
    type:Number,
    required: [true, "Price is required"],
  },
  description: {
    type:String,
    required: false,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
