const Joi = require("joi");

//create user
 const CreateUser = {
    body : Joi.object().keys({
        first_name :Joi.string().trim().required(),
        last_name :Joi.string().trim().required(),
        center_select :Joi.string().trim(),
        address :Joi.string().trim().required(),
        select_city :Joi.string().trim().required(),
        selcet_state :Joi.string().trim().required(),
        email :Joi.string().trim().required(),
        moblie_no :Joi.number().integer().required(),
        dath_of_birth :Joi.string().trim().required(),
    })
 }

 module.exports = {
     CreateUser
 }