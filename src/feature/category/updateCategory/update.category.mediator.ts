import {updateCategoryService} from "@/feature/category/updateCategory/update.category.service";
import UpdateCategoryCommand from "@/feature/category/updateCategory/update.category.command";

export const updateCategoryMediator = (command : UpdateCategoryCommand)=>{

    return {
        execute : async ()=>{
            try {
                const user = await updateCategoryService(command).find();

                return  {
                    data : user? await updateCategoryService(command).update() : {
                        message :  "fail",
                        reason :"user not found"}
                }
            }
            catch (error : any) {
                console.log(error.message)
                return  {
                    message : error.code === "P2002" ? "Category already exists" : error.message
                }
            }
        }
    }
}