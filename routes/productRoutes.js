const express = require("express");
const productController = require('./../controllers/productController');
const productRouter = express.Router();
//routes
productRouter
  .route("/")
  .get (productController.getAllProducts)
  .post(productController.addProduct);
  productRouter.route("/")
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);
productRouter.route("/:id").get(productController.getProductById);


module.exports = productRouter;
