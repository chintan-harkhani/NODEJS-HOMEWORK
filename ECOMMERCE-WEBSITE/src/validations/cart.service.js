const Joi  = require("joi");

//create user
const  CartCreate = {
    body :Joi.object().keys({
        User : Joi.string().trim().required(),
        product : Joi.string().trim().required(),
        qty :Joi.number().integer(),
        total_price :Joi.number().integer().required(),
        shipping_charge :Joi.number().integer().required(),
        sub_total_price :Joi.number().integer().required(),
    }),
};

module.exports ={
    CartCreate
}