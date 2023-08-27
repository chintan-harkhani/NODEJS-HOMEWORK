const express = require("express");
const { categorycontroller } = require("../../controllers");
const { CategoryValidation } = require("../../validations");
const validate = require("../../middlewares/validate")

const routes = express.Router();



routes.post("/creat-category",
  validate(CategoryValidation.Creatcategory),
  categorycontroller.createcategory
);

/** get category list */
routes.get("/list",
  // validate(CategoryValidation.GetCategoryList),
  categorycontroller.GetcategoryList

);

/**Delete Category  */
routes.delete('/delete-category/:categoryid',
  // validate(CategoryValidation.DeleteCategory),
  categorycontroller.Deletecategory
);
module.exports = routes;
