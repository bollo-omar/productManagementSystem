import UpdateUserCommand from "@/feature/user/updateUser/update.user.command";
import {prisma} from "@/shared/db";

export const updateUserService = (command: UpdateUserCommand) => {
    const {id, ...rest} = command
    return {
        update: async () => {
            return prisma.user.update({
                where: {
                    id
                },
                data: rest
            })
        },
        find: async () => {
            return prisma.user.findUnique({where : {id : command.id}})
        }
    }
}