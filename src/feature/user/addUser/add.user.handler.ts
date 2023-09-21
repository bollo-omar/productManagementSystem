import asyncHandler from "express-async-handler"
import AddUserCommand from "./add.user.command"
import {addUserValidationSchema} from "@/feature/user/addUser/add.user.validation.schema";
import {addUserMediator} from "@/feature/user/addUser/add.user.mediator";

export const addUserHandler = asyncHandler(async (req, res)=>{
    if(req.user.role!=="ADMIN"){
        res.status(400)
        throw new Error("You are nt allowed to access this resource")
    }

    const payload : AddUserCommand = req.body
    const {error} = addUserValidationSchema.validate(payload)
    
    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const user = await addUserMediator(payload).execute();

    if(user?.message){
        res.status(400)
        throw new Error(user.message)
    }
    res.status(201).json(user.data)
})