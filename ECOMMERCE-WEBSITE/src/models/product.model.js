const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
   {
      product_name: {
         type: String,
         trim: true,
      },
      product_img:{
         type :String,
         trim: true,
      },
      product_desc: {
         type: String,
         trim: true,
      },
      category: {
         type: mongoose.Types.ObjectId,
         ref: "category",
      },
      sub_category: {
         type: mongoose.Types.ObjectId,
         ref: "subcategory",
      },
      child_category: {
         type: mongoose.Types.ObjectId,
         ref: "ChildeCategory"
      },
      product_price: {
         type: Number,
         trim: true,
      },
      qty: {
         type: Number,
         trim: true,
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
const product = mongoose.model("product", ProductSchema)
module.exports = product;