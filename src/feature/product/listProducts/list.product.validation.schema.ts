import Joi from "joi"

export const listProductValidationSchema = Joi.object({
    take : Joi.number().required(),
    skip : Joi.number().required()
})