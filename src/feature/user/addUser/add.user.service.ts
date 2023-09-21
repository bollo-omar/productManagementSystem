import {prisma} from "@/shared/db";
import AddUserCommand from "@/feature/user/addUser/add.user.command";

export const addUserService = (payload: AddUserCommand) => {
    return {
        add: async () => {
            return prisma.user.create({data: payload})
        }
    }
}