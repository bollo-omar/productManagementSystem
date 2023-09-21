import Joi from "joi";

export const listUsersValidationSchema = Joi.object({
    take : Joi.number().required(),
    skip : Joi.number().required()
})