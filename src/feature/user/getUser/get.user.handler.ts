import asyncHandler from "express-async-handler"
import {GetUserQuery} from "./get.user.query"
import {getUserMediator} from "@/feature/user/getUser/get.user.mediator";
import {getUserValidationSchema} from "@/feature/user/getUser/get.user.validation.schema";

export const getUserHandler = asyncHandler(async (req, res)=>{
    if(req.user.role!=="ADMIN"){
        res.status(400)
        throw new Error("You are nt allowed to access this resource")
    }

    const payload : GetUserQuery = {id : parseInt(req.params.id)}
    const {error} = getUserValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await getUserMediator(payload).execute();

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(201).json(mediator.data)
})