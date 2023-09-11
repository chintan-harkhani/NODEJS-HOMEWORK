const Joi = require("joi");

//create  Sub Category
const CreateProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().trim().required(),
        product_img: Joi.string().trim().required(),
        product_desc: Joi.string().trim().required(),
        category: Joi.string().trim().required(),
        sub_category: Joi.string().trim().required(),
        child_category: Joi.string().trim().required(),
        product_price: Joi.number().integer().required(),
        qty: Joi.number().integer().required(),
    }),
};

module.exports = {
    CreateProduct
}