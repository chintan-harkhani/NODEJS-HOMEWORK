const express =  require("express");

const {SchoolController} = require("../../controllers");
const {SchoolValidation}  =require("../../validations")
const  validate  = require("../../middlewares/validate");

const routes = express.Router();

//create school
routes.post("/creat-school",
validate(SchoolValidation.CreateSchool),
   SchoolController.CreateSchool,
);

/** get school list */
routes.get("/school-list",
    SchoolController.GetSchoolList

);

/**Delete School  */
routes.delete('/delete-School/:schoolid',
    SchoolController.DeleteSchool
);
module.exports = routes;