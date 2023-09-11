const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema(
    {
        brand_name: {
            type: String,
            trim: true,
        },
        subcategory_type: {
            type: String,
            trim: true
        },
        subcategory_name: {
            type: String,
            trim: true
        },
        child_category: {
            type: mongoose.Types.ObjectId,
            ref: "ChildeCategory"
        },
        subcategory_stroage: {
            type: String,
            trim: true
        },
        subcategory_warranty: {
            type: String,
            trim: true,
            default: "1 Year Onsite Warranty",
        },
        subcategory_review: {
            type: String,
            trim: true,
            default: "Amazing 👏 Product."
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
const subcategory = mongoose.model("subcategory", SubcategorySchema)
module.exports = subcategory;