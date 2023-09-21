import Joi from "joi"

export const listProductByCategoryValidationSchema = Joi.object({
    take : Joi.number().required(),
    skip : Joi.number().required(),
    categoryID : Joi.number().required()
})