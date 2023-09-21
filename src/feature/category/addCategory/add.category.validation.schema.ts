import Joi from "joi"

export const addCategoryValidationSchema = Joi.object({
    name : Joi.string().alphanum().required()
})