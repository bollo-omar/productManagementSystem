import asyncHandler from "express-async-handler"
import {GetProductQuery} from "./get.product.query"
import {getProductValidationSchema} from "@/feature/product/getProduct/get.product.validation.schema";
import {getProductMediator} from "@/feature/product/getProduct/get.product.mediator";

export const getProductHandler = asyncHandler(async (req, res)=>{
    const payload : GetProductQuery = {id : parseInt(req.params.id)}
    const {error} = getProductValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await getProductMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})