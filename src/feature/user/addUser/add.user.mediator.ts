import AddUserCommand from "@/feature/user/addUser/add.user.command";
import { hash } from "bcryptjs";
import {addUserService} from "@/feature/user/addUser/add.user.service";
import logger from "@/shared/logger";

export const addUserMediator = (command :AddUserCommand)=>{
    const {password, ...rest} = command
    logger.info(command)
    return {
        execute : async ()=>{
            try {
                return  {
                    data : await addUserService({...rest, password: (await hash(password, 10))}).add()
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