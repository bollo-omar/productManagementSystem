import {IUser} from "@/feature/user/IUser";

declare global {
    namespace Express {
        export interface Request {
            user : IUser
        }
    }
}