import asyncHandler from "express-async-handler"
import UpdateCategoryCommand from "./update.category.command"
import {updateCategoryValidationSchema} from "@/feature/category/updateCategory/update.category.validation.schema";
import {updateCategoryMediator} from "@/feature/category/updateCategory/update.category.mediator";

export const updateCategoryHandler = asyncHandler(async (req, res)=>{
    const payload : UpdateCategoryCommand = {name : req.body.name, id : parseInt(req.params.id as string) }
    const {error} = updateCategoryValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await updateCategoryMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})