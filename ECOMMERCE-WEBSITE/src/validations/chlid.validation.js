const Joi  = require("joi");

//create user
const  ChildCreate = {
    body :Joi.object().keys({
        child_name : Joi.string().trim().required(),
        child_desc : Joi.string().trim().required(),
        offer : Joi.string().trim(),
        genral : Joi.string().trim().required(),
        processor : Joi.string().trim().required(),
        system : Joi.string().trim().required(),
        other : Joi.string().trim().required(),
    }),
};

module.exports ={
    ChildCreate
}