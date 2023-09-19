import Joi from "joi";

export const updateUserValidationSchema  = Joi.object({
    id : Joi.number().required(),
    firstname : Joi.string().alphanum().optional(),
    lastname : Joi.string().alphanum().optional(),
    email : Joi.string().email().optional(),
    role : Joi.string().valid("ADMIN" , "USER").optional(),
})