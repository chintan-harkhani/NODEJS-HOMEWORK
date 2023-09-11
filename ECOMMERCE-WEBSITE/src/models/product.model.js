const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
          product_name :{
             type : String,
             trim : true,
          },
         product_desc :{
            type : String,
            trim : true,
         },         is_active :{
             type : Boolean,
             default : true,
          },
    },
    {
         timestamps :   true,
         versionKey : false,
    },
);
const User = mongoose.model("user" ,UserSchema)
module.exports = User;