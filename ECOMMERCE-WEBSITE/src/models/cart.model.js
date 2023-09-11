const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
          User :{
             type : mongoose.Types.ObjectId,
             ref : "user",
          },
          product : {
            type : mongoose.Types.ObjectId,
            ref : "product",
          },
          qty :{
           type : Number,
           trim :true,
           default : 1
          },
           total_price :{
             type : Number,
             trim : true,
          },
          shipping_charge :{
            type : Number,
             trim : true,
          },
          sub_total_price :{
            type : Number,
             trim : true,
          },
          is_active :{
             type : Boolean,
             default : true,
          },
    },
    {
         timestamps :   true,
         versionKey : false,
    },
);
const cart = mongoose.model("cart" ,CartSchema)
module.exports = cart;