import {NextFunction, Request, Response} from "express";
import asyncHandler from "express-async-handler";
import jwt, {JsonWebTokenError} from "jsonwebtoken";
import {tokenService} from "@/shared/token.service";
import {prisma} from "@/shared/db";
import {IToken} from "@/shared/interfaces/IToken";

export const protect = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const bearer = request.headers.authorization;

    if (!bearer || !bearer.startsWith('Bearer')) {
        response.status(401)
        throw new Error("Unauthorized access.")
    }
    const token = bearer.split('Bearer ')[1].trim();

    try {
        const payload: JsonWebTokenError | IToken = await tokenService().verifyToken(token)

        if (payload instanceof jwt.JsonWebTokenError) {
            response.status(401)
            throw new Error('Unauthorized access')
        }
        const user = await prisma.user.findUnique({
            where: {
                id: payload.userId
            }
        })

        if (!user) {
            response.status(401)
            throw new Error("Unauthorized access.")
        }
        const {password,...rest} = user;
        request.user = user

        next();
    } catch (error: any) {
        response.status(401)
        throw  new Error("Unauthorized access")
    }
})