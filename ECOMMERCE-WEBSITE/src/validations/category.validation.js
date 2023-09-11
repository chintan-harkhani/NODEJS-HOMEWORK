const Joi  = require("joi");

//create user
const  CreateCreate = {
    body :Joi.object().keys({
        category_name : Joi.string().trim().required(),
        category_desc : Joi.string().trim().required(),
        color : Joi.string().trim().required(),
    }),
};

module.exports ={
    CreateCreate
}