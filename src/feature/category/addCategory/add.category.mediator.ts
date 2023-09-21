import {addCategoryService} from "@/feature/category/addCategory/add.category.service";
import AddCategoryCommand from "@/feature/category/addCategory/add.category.command";

export const addCategoryMediator = (command :AddCategoryCommand)=>{

    return {
        execute : async ()=>{
            try {
                return  {
                    data : await addCategoryService(command).add()
                }
            }
            catch (error : any) {
                return  {
                    message : error.code === "P2002" ? "Category already exists" : error.message
                }
            }
        }
    }
}