import {listCategoriesService} from "@/feature/category/listCategories/list.categories.service";
import {ListCategoriesQuery} from "@/feature/category/listCategories/list.categories.query";

export const listCategoriesMediator = (query :ListCategoriesQuery)=>{

    return {
        execute : async ()=>{
            try {
                return  {
                    data : await listCategoriesService(query).list()
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