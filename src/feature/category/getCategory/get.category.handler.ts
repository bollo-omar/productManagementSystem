import asyncHandler from "express-async-handler"
import {GetCategoryQuery} from "./get.category.query"
import {getCategoryValidationSchema} from "@/feature/category/getCategory/get.category.validation.schema";
import {getCategoryMediator} from "@/feature/category/getCategory/get.category.mediator";

export const getCategoryHandler = asyncHandler(async (req, res)=>{
    const payload : GetCategoryQuery = {id : parseInt(req.params.id)}
    const {error} = getCategoryValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await getCategoryMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})