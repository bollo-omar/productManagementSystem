import asyncHandler from "express-async-handler"
import {ListProductQuery} from "./list.product.query"
import {listProductValidationSchema} from "@/feature/product/listProducts/list.product.validation.schema";
import {listProductMediator} from "@/feature/product/listProducts/list.product.mediator";

export const listProductHandler = asyncHandler(async (req, res)=>{
    const payload : ListProductQuery = {skip : parseInt(req.query.skip as string), take : parseInt(req.query.take as string)}
    const {error} = listProductValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await listProductMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})