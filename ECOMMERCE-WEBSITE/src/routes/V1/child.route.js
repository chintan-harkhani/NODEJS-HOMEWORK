const express = require("express");
const validate  = require("../../middlewares/validate");
const {ChildController}  = require("../../controllers");
const {ChildValidation}  = require("../../validations");

const routes = express.Router();

//creat Child

routes.post("/createchild",
      validate(ChildValidation.ChildCreate),
      ChildController.CreateChild
)

//Child list

routes.get("/childlist",
ChildController.ChildList
);

//Child id
routes.get("/childlist/:childId",
    ChildController.childId
);

//delete Child

routes.delete("/deletechild/:childId",
    ChildController.DeleteChild
);

//update Child

routes.put("/updatechild/:childId",
     ChildController.UpdateChild
);

module.exports = routes;