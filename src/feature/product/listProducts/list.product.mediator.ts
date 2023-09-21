import {listProductService} from "@/feature/product/listProducts/list.product.service";
import {ListProductQuery} from "@/feature/product/listProducts/list.product.query";

export const listProductMediator = (query :ListProductQuery)=>{

    return {
        execute : async ()=>{
            try {
                return  {
                    data : await listProductService(query).list()
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