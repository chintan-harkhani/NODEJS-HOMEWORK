const express = require("express");
const { CategoryController  } = require("../../controllers");
const { CategoryValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const routes = express.Router();

//create Category

routes.post("/createcategory",
    validate(CategoryValidation.CreateCreate),
    CategoryController.CreateCategory
);

//Category list

routes.get("/categorylist",
    CategoryController.CategoryList
);

//Category id
routes.get("/categorylist/:categoryId",
     CategoryController.CategoryId
);

//delete Category

routes.delete("/deletecategory/:categoryId",
     CategoryController.DeleteCategory
);

//update Category

routes.put("/updatecategory/:categoryId",
      CategoryController.UpdateCategory
);

module.exports = routes;