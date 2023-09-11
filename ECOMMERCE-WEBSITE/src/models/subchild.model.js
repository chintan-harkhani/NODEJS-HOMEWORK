const mongoose = require("mongoose");

const ChildSchema = new mongoose.Schema(
    
    {
      category: {
         type: mongoose.Types.ObjectId,
         ref: "category"
     },
         child_name :{
               type : String,
               trim : true
         },
         sub_category :{
            type: mongoose.Types.ObjectId,
            ref: "subcategory"
           },
            child_desc :{
             type : String,
             trim : true,
         },
         offer :{
             type : String,
             trim : true,
         },
          genral :{
             type :String,
             trim : true,
          },
          processor :{
            type :String,
             trim : true,
          },
          system : {
             type : String,
             trim : true,
          },
          other : {
             type :String,
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
const child = mongoose.model("ChildeCategory" ,ChildSchema)
module.exports = child;