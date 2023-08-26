const Joi = require("joi");

const CreateSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        school_address: Joi.string().required().trim(),
        school_principal: Joi.string().required().trim(),
        school_emailaddress: Joi.string().required().trim(),
        school_mobile_no: Joi.number().integer().required(),
        school_zone: Joi.string().required().trim(),
    }),
}

module.exports ={
    CreateSchool
}