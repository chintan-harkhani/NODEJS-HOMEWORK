const express = require("express");
const validate  = require("../../middlewares/validate");
const {CartController}  = require("../../controllers");
const {CartValidation}  = require("../../validations");

const routes = express.Router();

//creat cart

routes.post("/createcart",
      validate(CartValidation.CartCreate),
        CartController.CreateCart
)

//cart list

routes.get("/cartlist",
  CartController.CartList
);

//cart id
routes.get("/cartlist/:cartId",
   CartController.CartId
);

//delete cart

routes.delete("/deletecart/:cartId",
    CartController.DeleteCart
);

//update cart

routes.put("/updatecart/:cartId",
      CartController.UpdateCart
);

module.exports = routes;