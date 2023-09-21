import Joi from "joi"

export const updateCategoryValidationSchema = Joi.object({
    name : Joi.string().required(),
    id : Joi.number().required()
})