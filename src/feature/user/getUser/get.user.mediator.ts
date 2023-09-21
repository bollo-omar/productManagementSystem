import {getUserService} from "@/feature/user/getUser/get.user.service";
import {GetUserQuery} from "@/feature/user/getUser/get.user.query";

export const getUserMediator = (query :GetUserQuery)=>{

    return {
        execute : async ()=>{
            try {
                const user = await getUserService(query).find()
                return  {
                    data : user? user : {message : "No User item(s) found"}
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