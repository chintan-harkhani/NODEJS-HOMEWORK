const express =  require("express");
const {JewellaryController} = require("../../controllers");
const {JewellaryValidation} =require("../../validations")
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create jewellary
 routes.post("/creat-Jewellary",
  validate(JewellaryValidation.CreateJewellary),
   JewellaryController.CreateJewellery
 );

/** get category list */
routes.get("/jewellary-list",
    JewellaryController.GetJewellaryList

);

/**Delete Category  */
routes.delete('/delete-jewellary/:jewellaryid',
     JewellaryController.DeleteJewellary
);
module.exports =routes;
