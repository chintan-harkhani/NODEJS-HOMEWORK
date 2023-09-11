const Joi = require("joi");

//create  Sub Category
const CreateSubCategory = {
    body: Joi.object().keys({
        brand_name: Joi.string().trim().required(),
        subcategory_type: Joi.string().trim().required(),
        subcategory_name: Joi.string().trim().required(),
        child_category: Joi.string().trim().required(),
        subcategory_stroage: Joi.string().trim().required(),
        subcategory_warranty: Joi.string().trim(),
        subcategory_review: Joi.string().trim(),
    }),
};

module.exports = {
     CreateSubCategory
}