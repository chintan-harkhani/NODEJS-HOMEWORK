const  express = require("express");
const UserRoutes = require("./user.route");
const ChildRoutes = require("./child.route");
const SubCategoryRoutes  = require("./subcategory.route");
const CategoryRoutes  = require("./category.route");
const ProductRoutes =require("./product.route");
const CartRoutes =require("./cart.route");
const OrderRoutes =require("./order.route");

const routes = express.Router();

routes.use("/user", UserRoutes);
routes.use("/child" , ChildRoutes);
routes.use("/subcategory" , SubCategoryRoutes);
routes.use("/category" , CategoryRoutes);
routes.use("/product" , ProductRoutes);
routes.use("/cart" , CartRoutes);
routes.use("/order" , OrderRoutes);

module.exports = routes;