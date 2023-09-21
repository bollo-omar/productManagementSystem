import asyncHandler from "express-async-handler"
import UpdateProductCommand from "./update.product.command"
import {updateProductMediator} from "@/feature/product/updateProduct/update.product.mediator";
import {updateProductValidationSchema} from "@/feature/product/updateProduct/update.product.validation.schema";

export const updateProductHandler = asyncHandler(async (req, res) => {
    const payload: UpdateProductCommand = {...req.body,id: parseInt(req.params.id)}
    const {error} = updateProductValidationSchema.validate(payload)

    if (error) {
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await updateProductMediator(payload).execute();

    if (mediator?.message) {
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})