import Joi from "joi"

export const listCategoriesValidationSchema = Joi.object({
    take : Joi.number().required(),
    skip : Joi.number().required()
})