const express = require("express");

const {BusController} = require("../../controllers");
const {BusValidation} =require("../../validations");
const validate =require("../../middlewares/validate");

const routes = express.Router();

//create bus

routes.post("/creat-bus",
  validate(BusValidation.CrateBus),
BusController.CreateBus
);
/** get Bus list */
routes.get("/bus-list",
  BusController.GetBusList,

);

/**Delete Bus  */
routes.delete('/delete-bus/:busId',
    BusController.DeleteBus
);

module.exports = routes;