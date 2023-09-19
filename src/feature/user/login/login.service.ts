import LoginCommand from "@/feature/user/login/login.command";
import {prisma} from "@/shared/db";

export const loginService = (email : string) => {
    return {
        login: async () => {
            return prisma.user.findUnique({
                where: {
                    email
                }
            })
        }
    }
}