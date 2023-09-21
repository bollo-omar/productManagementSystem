import asyncHandler from "express-async-handler"
import AddProductCommand from "./add.product.command"
import {addProductValidationSchema} from "@/feature/product/addProduct/add.product.validation.schema";
import {addProductMediator} from "@/feature/product/addProduct/add.product.mediator";

export const addProductHandler = asyncHandler(async (req, res)=>{
    const payload : AddProductCommand = req.body
    const {error} = addProductValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await addProductMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})