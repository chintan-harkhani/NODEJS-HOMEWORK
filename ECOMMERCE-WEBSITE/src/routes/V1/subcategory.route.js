const express = require("express");
const { SubCategoryController  } = require("../../controllers");
const { SubCategoryValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const routes = express.Router();

//create SubCategory

routes.post("/createsubcategory",
    validate(SubCategoryValidation.CreateSubCategory),
    SubCategoryController.CreateSubCategory
);

//SubCategory list

routes.get("/subcategorylist",
    SubCategoryController.SubCategoryList
);

//SubCategory id
routes.get("/subcategorylist/:subcategoryId",
     SubCategoryController.SubCategoryId
);

//delete SubCategory

routes.delete("/deletesubcategory/:subcategoryId",
     SubCategoryController.DeleteSubCategory
);

//update SubCategory

routes.put("/updatesubcategory/:subcategoryId",
      SubCategoryController.UpdateSubCategory
);

module.exports = routes;