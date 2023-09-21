import asyncHandler from "express-async-handler"
import DeleteCategoryCommand from "./delete.category.command"
import {deleteCategoryValidationSchema} from "@/feature/category/deleteCategory/delete.category.validation.schema";
import {deleteCategoryMediator} from "@/feature/category/deleteCategory/delete.category.mediator";

export const deleteCategoryHandler = asyncHandler(async (req, res)=>{
    const payload : DeleteCategoryCommand = { id : parseInt(req.params.id as string) }
    const {error} = deleteCategoryValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await deleteCategoryMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})