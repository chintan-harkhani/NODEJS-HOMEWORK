const express =  require("express");

const {GroceryController} = require("../../controllers");
const {GroceryValidation}  =require("../../validations");
const  validate  = require("../../middlewares/validate");

const routes = express.Router();

//create grocery
routes.post("/creat-grocery",
validate(GroceryValidation.CreateGrocery),
   GroceryController.CreateGrocery,
);

/** get Grocery list */
routes.get("/grocery-list",
  GroceryController.GetGroceryList

);

/**Delete Grocery  */
routes.delete('/delete-grocery/:groceryid',
    GroceryController.Deletegrocery
);
module.exports = routes;