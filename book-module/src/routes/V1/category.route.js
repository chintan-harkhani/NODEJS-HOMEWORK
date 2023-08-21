const express =  require("express");
const {categorycontroller} = require("../../controllers");
const { CategoryValidation}  =require("../../validations");

const validate = require("../../middlewares/validate")

const  routes = express.Router();



 routes.post("/creat-category",
  validate(CategoryValidation.Creatcategory),
  categorycontroller.createcategory
 );

/** get user list */
// routes.get("/list",
//   // validate(userValidatino.getUserList),
//   categorycontroller.
// );
module.exports =routes;
