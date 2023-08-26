const Joi = require("joi");

const CreateJewellary = {
    body: Joi.object().keys({
        Customer_name: Joi.string().required().trim(),
        Phone: Joi.number().integer().required(),
        Address: Joi.string().required().trim(),
        Qty: Joi.number().integer().required(),
        Jewellery_type: Joi.string().required().trim(),
        Jewellery_unit_price: Joi.string().required().trim(),
        Jewellery_Total_Price: Joi.string().required().trim(),
    }),
}

module.exports ={
    CreateJewellary
}