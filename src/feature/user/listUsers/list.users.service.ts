import {ListUsersQuery} from "@/feature/user/listUsers/list.users.query";
import {prisma} from "@/shared/db";
import logger from "@/shared/logger";

export const listUsersService = (query : ListUsersQuery)=>{

    return{
        list : async ()=>{

            return prisma.user.findMany(query)
        }
    }
}