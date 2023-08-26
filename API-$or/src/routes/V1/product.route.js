const express =require("express");
const {ProductController} =require("../../controllers");
const {ProductValidation} =require("../../validations")
const validate =require("../../middlewares/validate")
const routes =express.Router();


// create product
routes.post("/creat-product",
validate(ProductValidation.CreateProduct),
ProductController.createProduct
);

routes.get("/ProductList",
ProductController.GetProductList
)
routes.delete("/delete-product/:productId",
  ProductController.Deleteproduct
)
module.exports =routes;