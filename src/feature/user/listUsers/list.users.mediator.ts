import {ListUsersQuery} from "@/feature/user/listUsers/list.users.query";
import {listUsersService} from "@/feature/user/listUsers/list.users.service";

export const listUsersMediator = (query: ListUsersQuery) => {
    return {
        execute: async () => {
            const users = await listUsersService(query).list()
            try {
                return {
                    data: users.length !==0? users : { message : "no users found"}
                }
            } catch (error: any) {
                return {
                    message: error.message
                }
            }
        }
    }
}