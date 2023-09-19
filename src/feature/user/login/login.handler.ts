import asyncHandler from "express-async-handler";
import LoginCommand from "@/feature/user/login/login.command";
import {loginValidationSchema} from "@/feature/user/login/login.validation.schema";
import {loginMediator} from "@/feature/user/login/login.mediator";

export const loginHandler = asyncHandler(async (req, res)=>{
    const payload : LoginCommand = req.body
    const {error}  = loginValidationSchema.validate(payload);

    if(error){
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await loginMediator(payload).execute()

    if(mediator?.message){
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(200).json(mediator.data)
})