import asyncHandler from "express-async-handler"
import AddCategoryCommand from "./add.category.command"
import {addCategoryValidationSchema} from "@/feature/category/addCategory/add.category.validation.schema";
import {addCategoryMediator} from "@/feature/category/addCategory/add.category.mediator";

export const addCategoryHandler = asyncHandler(async (req, res)=>{
    const payload : AddCategoryCommand = req.body
    const {error} = addCategoryValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await addCategoryMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})