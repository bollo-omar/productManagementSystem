import {addProductService} from "@/feature/product/addProduct/add.product.service";
import AddProductCommand from "@/feature/product/addProduct/add.product.command";
import {v4 as uuid} from "uuid";

export const addProductMediator = (command :AddProductCommand)=>{

    return {
        execute : async ()=>{
            try {
                const category = await addProductService(command).findCategory()
                if(category){
                    return {
                        data : await addProductService(command).add()
                    }
                }
                return  {
                    data :  {
                        message : "fail",
                        reason : "Cant add product to a nonexistent Category"
                    }
                }
            }
            catch (error : any) {

                console.log(error.message)
                return  {
                    message : error.code === "P2002" ? "Product already exists" : error.message
                }
            }
        }
    }
}