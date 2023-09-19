import {updateUserService} from "@/feature/user/updateUser/update.user.service";
import UpdateUserCommand from "@/feature/user/updateUser/update.user.command";

export const updateUserMediator = (command : UpdateUserCommand)=>{
    return {
        execute : async ()=>{
            try {
                return {
                    data :  await updateUserService(command).update()
                }
            }
            catch (error : any) {
                return  {
                    message : error.message
                }
            }
        }
    }
}