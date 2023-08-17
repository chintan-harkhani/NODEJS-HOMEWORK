const express = require("express");
const userRoute = require("./user.route");
const categoryRoute =require("./category.route")

const  routes = express.Router();

routes.use("/user",userRoute);
routes.use("/category",categoryRoute);

module.exports = routes;