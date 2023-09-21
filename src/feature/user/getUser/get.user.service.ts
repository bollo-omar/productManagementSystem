import {prisma} from "@/shared/db";
import {GetUserQuery} from "@/feature/user/getUser/get.user.query";

export const getUserService = (payload: GetUserQuery) => {
    return {
        find: async () => {
            return prisma.user.findUnique({
                where : payload
            })
        }
    }
}