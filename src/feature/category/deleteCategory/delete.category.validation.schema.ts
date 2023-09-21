import Joi from "joi"

export const deleteCategoryValidationSchema = Joi.object({
    id : Joi.number().required()
})