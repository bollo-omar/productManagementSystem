import Joi from "joi"

export const getProductValidationSchema = Joi.object({
    id : Joi.number().required()
})