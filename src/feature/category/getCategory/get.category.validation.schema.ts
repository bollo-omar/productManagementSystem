import Joi from "joi"

export const getCategoryValidationSchema = Joi.object({
    id : Joi.number().required()
})