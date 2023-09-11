const Joi  = require("joi");

//create user
const  CreateOrder = {
    body :Joi.object().keys({
        User : Joi.string().trim().required(),
        product : Joi.string().trim().required(),
        cart : Joi.string().trim().required(),
        order_desc : Joi.string().trim().required(),
        orderstatus : Joi.string().trim().required(),
        total : Joi.number().integer().required(),
    }),
};

module.exports ={
    CreateOrder
}