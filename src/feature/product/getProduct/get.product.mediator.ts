import {getProductService} from "@/feature/product/getProduct/get.product.service";
import {GetProductQuery} from "@/feature/product/getProduct/get.product.query";

export const getProductMediator = (query :GetProductQuery)=>{

    return {
        execute : async ()=>{
            try {
               const product = await getProductService(query).find()
                return  {
                    data : product? product : {message : "no product found"}
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