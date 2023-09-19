import AddUserCommand from "@/feature/user/addUser/add.user.command";
import { hash } from "bcryptjs";
import {addUserService} from "@/feature/user/addUser/add.user.service";

export const addUserMediator = (command :AddUserCommand)=>{
    const {password, ...rest} = command
    return {
        execute : async ()=>{
            try {
                return  {
                    data : addUserService({...rest, password: (await hash(password, 10))})
                }
            }
            catch (error : any) {
                return  {
                    message : error.code === "P2002" ? "User already exists" : error.message
                }
            }
        }
    }
}