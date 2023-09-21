import {listProductByCategoryService} from "@/feature/product/listProductsByCategory/list.productByCategory.service";
import {ListProductByCategoryQuery} from "@/feature/product/listProductsByCategory/list.productByCategory.query";

export const listProductByCategoryMediator = (query :ListProductByCategoryQuery)=>{

    return {
        execute : async ()=>{
            try {
                return  {
                    data : await listProductByCategoryService(query).listByCategory()
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