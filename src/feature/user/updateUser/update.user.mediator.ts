import {updateUserService} from "@/feature/user/updateUser/update.user.service";
import UpdateUserCommand from "@/feature/user/updateUser/update.user.command";

export const updateUserMediator = (command : UpdateUserCommand)=>{
    return {
        execute : async ()=>{
            try {
                const user = await updateUserService(command).find()

                if(user) {
                    const updatedUser = await updateUserService(command).update()
                    const {password, ...rest} = updatedUser

                    return {
                        data : updatedUser
                    }
                }

                return {
                    data :  {
                        message : "fail",
                        reason : "user not found"
                    }
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