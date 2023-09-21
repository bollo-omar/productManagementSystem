import Joi from "joi"

export const addProductValidationSchema = Joi.object({
    name: Joi.string().required(),
    unit: Joi.string().required(),
    unitPrice: Joi.number().required(),
    quantity: Joi.number().required(),
    categoryID: Joi.number().required()
})