//Handlers
const fs = require('fs');
const Product = require('../models/Product');
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = catchAsync(async (req, res) => {

  const products = await Product.find();
  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
});
exports.addProduct = catchAsync (async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      product: newProduct,
    },
  });
});

exports.getProductById = catchAsync (async (req, res) => {
  const foundProduct = await Product.findById(req.params.id);
  if (foundProduct) {
    res.status(200).json({
      status: "success",
      data: {
        product: foundProduct,
      },
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
});
// ProductFindByIdAndUpdate(id,body,{new:true})
//ProductFindByIdAndDelete(id);
exports.ProductUpdate = async (req, res) => {
  const id = req.params.id
  const body = req.body
  console.log(body)
  const product = await Product.findByIdAndUpdate(id, body)
  res.status(200).json({
    status: "Product Update",
    data: {
      product
    },
  });
};

exports.Productdelete = async (req, res) => {
  const id = req.params.id
  const product = await Product.findByIdAndDelete(id)
  res.status(200).json({
    status: "Product delete",
    data: {
      product
    },
  });
};
