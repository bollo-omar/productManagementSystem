import asyncHandler from "express-async-handler";
import UpdateUserCommand from "@/feature/user/updateUser/update.user.command";
import {updateUserValidationSchema} from "@/feature/user/updateUser/update.user.validation.schema";
import {updateUserMediator} from "@/feature/user/updateUser/update.user.mediator";

export const updateUserHandler = asyncHandler(async (req, res) => {
    const payload: UpdateUserCommand = {...req.body, id: req.params}
    const {error} = updateUserValidationSchema.validate(payload);

    if (error) {
        res.status(400)
        throw new Error(error.message)
    }

    const mediator = await updateUserMediator(payload).execute();

    if (mediator?.message) {
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(200).json(mediator.data)
})