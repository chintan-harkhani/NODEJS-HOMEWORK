const express =  require("express");
const {categorycontroller} = require("../../controllers");
const { CategoryValidation}  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create category
 routes.post("/creat-category",
  validate(CategoryValidation.Creatcategory),
  categorycontroller.createcategory
 );

/** get category list */
routes.get("/list",
  categorycontroller.GetcategoryList

);

/**Delete Category  */
routes.delete('/delete-category/:categoryid',
    categorycontroller.Deletecategory
);
module.exports =routes;
