import Joi from "joi"

export const deleteProductValidationSchema = Joi.object({
    id : Joi.number().required()
})