import Joi from "joi"

export const updateProductValidationSchema = Joi.object({
    name: Joi.string().required(),
    unit: Joi.string().required(),
    unitPrice: Joi.number().required(),
    quantity: Joi.number().required(),
    id: Joi.number().required()
})