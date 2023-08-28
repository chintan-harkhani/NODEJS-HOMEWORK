const express = require("express");
const { EcommerceController } = require("../../controllers");
const routes = express.Router();


/** get Ecommerce data list */
routes.get("/Ecom-list",
   EcommerceController.GetEcommerceList
);

module.exports= routes;
