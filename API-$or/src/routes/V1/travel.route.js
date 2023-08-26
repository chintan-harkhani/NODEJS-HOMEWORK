const {TravelController} =require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const  {TravelValidation} =require("../../validations");

const routes = express.Router();


//create travel
routes.post("/creat-travel",
validate(TravelValidation.CreateTravel),
  TravelController.CreateTravel
);

/** get travel list */
routes.get("/travel-list",
    TravelController.GetTravelList,

);

/**Delete travel  */
routes.delete('/delete-travel/:travelid',
    TravelController.DeleteTravel,
);

module.exports = routes;