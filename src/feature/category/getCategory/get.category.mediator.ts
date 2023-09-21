import {GetCategoryQuery} from "@/feature/category/getCategory/get.category.query";
import {getCategoryService} from "@/feature/category/getCategory/get.category.service";

export const getCategoryMediator = (query :GetCategoryQuery)=>{

    return {
        execute : async ()=>{
            try {
                const category = await getCategoryService(query).find()
                return  {
                    data : category? category : {message : "No category item(s) found"}
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