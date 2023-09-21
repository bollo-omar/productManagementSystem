import UpdateProductCommand from "@/feature/product/updateProduct/update.product.command";
import {updateProductService} from "@/feature/product/updateProduct/update.product.service";

export const updateProductMediator = (command: UpdateProductCommand) => {

    return {
        execute: async () => {
            try {
                const product = await updateProductService(command).find()

                if(product){
                    return {
                        data: await updateProductService(command).update()
                    }
                }
                return  {
                    data : {
                        message : "fail",
                        reason : "product not found"
                    }
                }

            } catch (error: any) {
                return {
                    message: error.message
                }
            }
        }
    }
}