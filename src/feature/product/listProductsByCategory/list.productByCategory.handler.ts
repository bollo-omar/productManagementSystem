import asyncHandler from "express-async-handler"
import {ListProductByCategoryQuery} from "./list.productByCategory.query"
import {
    listProductByCategoryValidationSchema
} from "@/feature/product/listProductsByCategory/list.productByCategory.validation.schema";
import {listProductByCategoryMediator} from "@/feature/product/listProductsByCategory/list.productByCategory.mediator";

export const listProductByCategoryHandler = asyncHandler(async (req, res)=>{
    const payload : ListProductByCategoryQuery = {skip : parseInt(req.query.skip as string), take : parseInt(req.query.take as string), categoryID : parseInt(req.params.categoryID)}
    const {error} = listProductByCategoryValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await listProductByCategoryMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})