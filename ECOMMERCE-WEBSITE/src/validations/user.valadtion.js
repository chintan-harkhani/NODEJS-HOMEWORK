const Joi  = require("joi");

//create user
const  UserCreate = {
    body :Joi.object().keys({
        first_name : Joi.string().trim().required(),
        last_name : Joi.string().trim().required(),
        email : Joi.string().trim().required(),
        moblie_no : Joi.number().integer(),
    }),
};

module.exports ={
    UserCreate
}