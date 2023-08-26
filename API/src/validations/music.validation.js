const Joi = require("joi");

const CreateMusic= {
    body: Joi.object().keys({
        Music_artist_name: Joi.string().required().trim(),
        Music_Event_date: Joi.string().required().trim(),
        Music_Event_time: Joi.string().required().trim(),
        Music_Event_address: Joi.string().required().trim(),
        Your_name: Joi.string().required().trim(),
        Your_email: Joi.string().required().trim(),
        your_number: Joi.number().integer().required(),
        Music_Event_Price: Joi.number().integer().required(),
    }),
}

module.exports ={
    CreateMusic
}