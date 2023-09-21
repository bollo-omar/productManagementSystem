import Joi from "joi"

export const getUserValidationSchema = Joi.object({
    id : Joi.number().required()
})