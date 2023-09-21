import asyncHandler from "express-async-handler"
import DeleteProductCommand from "./delete.product.command"
import {deleteProductValidationSchema} from "@/feature/product/deleteProduct/delete.product.validation.schema";
import {deleteProductMediator} from "@/feature/product/deleteProduct/delete.product.mediator";

export const deleteProductHandler = asyncHandler(async (req, res)=>{
    const payload : DeleteProductCommand = { id : parseInt(req.params.id as string) }
    const {error} = deleteProductValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await deleteProductMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})