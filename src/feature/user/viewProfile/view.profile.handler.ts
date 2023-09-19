import asyncHandler from "express-async-handler";

export const viewProfileHandler = asyncHandler(async (req, res)=>{
    if(req.user.id !== parseInt(req.params.id)){
        res.status(403)
        throw new Error("You are not allowed to access this resource")
    }
    res.status(200).json(req.user)
})