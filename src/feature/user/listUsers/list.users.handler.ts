import asyncHandler from "express-async-handler";
import {ListUsersQuery} from "@/feature/user/listUsers/list.users.query";
import {listUsersValidationSchema} from "@/feature/user/listUsers/list.users.validation.schema";
import {listUsersMediator} from "@/feature/user/listUsers/list.users.mediator";
import logger from "@/shared/logger";

export const listUsersHandler = asyncHandler(async (req, res) => {
    if (req.user.role !== "ADMIN") {
        res.status(400)
        throw new Error("You are nt allowed to access this resource")
    }

    const payload: ListUsersQuery = {
        skip: parseInt(req.query.skip as string),
        take: parseInt(req.query.take as string)
    }

    const {error} = listUsersValidationSchema.validate(payload)


    if (error) {
        res.status(400)
        throw new Error(error.message)
    }
    const mediator = await listUsersMediator(payload).execute();

    if (mediator?.message) {
        res.status(400)
        throw new Error(mediator.message)
    }
    res.status(200).json(mediator.data)
})