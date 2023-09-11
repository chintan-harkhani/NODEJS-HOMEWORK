const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
   {
    User :{
        type : mongoose.Types.ObjectId,
        ref : "user",
     },
     product : {
       type : mongoose.Types.ObjectId,
       ref : "product",
     },
     cart: {
        type: mongoose.Types.ObjectId,
        ref: "cart",
      },
     order_desc :{
             type :String,
             trim : true,
     },
     orderstatus :{
         type : String,
         trim : true,
     },
     total :{
        type : Number,
        trim : true
     },
      is_active: {
         type: Boolean,
         default: true,
      },
   },
   {
      timestamps: true,
      versionKey: false,
   },
);
const Order = mongoose.model("order", OrderSchema)
module.exports = Order;