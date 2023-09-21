import asyncHandler from "express-async-handler"
import {ListCategoriesQuery} from "./list.categories.query"
import {listCategoriesValidationSchema} from "@/feature/category/listCategories/list.categories.validation.schema";
import {listCategoriesMediator} from "@/feature/category/listCategories/list.categories.mediator";
import logger from "@/shared/logger";

export const listCategoriesHandler = asyncHandler(async (req, res)=>{
    const payload : ListCategoriesQuery = {skip : parseInt(req.query.skip as string), take : parseInt(req.query.take as string)}
    logger.error(payload)
    const {error, value} = listCategoriesValidationSchema.validate(payload)

    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await listCategoriesMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})