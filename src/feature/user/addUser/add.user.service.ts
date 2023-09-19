import {prisma} from "@/shared/db";
import AddUserCommand from "@/feature/user/addUser/add.user.command";

export const addUserService = (payload: AddUserCommand) => {
    return {
        addUser: async () => {
            return prisma.user.create({data: payload})
        }
    }
}