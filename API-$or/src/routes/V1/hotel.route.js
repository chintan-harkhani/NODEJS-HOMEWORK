const express =  require("express");
const {HotelController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const {HotelValidation} =require("../../validations");

const  routes = express.Router();


//create hotel
 routes.post("/creat-hotel",
  validate(HotelValidation.CreateHotel),
    HotelController.CrateHotel
 );

/** get category list */
routes.get("/hotel-list",
  HotelController.GetHotelList,

);

/**Delete Category  */
routes.delete("/delete-hotel/:hotelid",
    HotelController.DeleteHotel
);
module.exports = routes;