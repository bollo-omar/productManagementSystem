import Joi from "joi"

export const addUserValidationSchema = Joi.object({
    firstname : Joi.string().alphanum().required(),
    lastname : Joi.string().alphanum().required(),
    email : Joi.string().email().required(),
    role : Joi.string().valid("ADMIN" , "USER").required(),
    password : Joi.string().required()
})