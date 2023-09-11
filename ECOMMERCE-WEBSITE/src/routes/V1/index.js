const  express = require("express");
const UserRoutes = require("./user.route");
const ChildRoutes = require("./child.route");
const SubCategoryRoutes  = require("./subcategory.route");
const CategoryRoutes  = require("./category.route");

const routes = express.Router();

routes.use("/user", UserRoutes);
routes.use("/child" , ChildRoutes);
routes.use("/subcategory" , SubCategoryRoutes);
routes.use("/category" , CategoryRoutes);

module.exports = routes;