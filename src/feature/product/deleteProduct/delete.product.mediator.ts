import DeleteCategoryCommand from "@/feature/category/deleteCategory/delete.category.command";
import {deleteProductService} from "@/feature/product/deleteProduct/delete.product.service";

export const deleteProductMediator = (command: DeleteCategoryCommand) => {

    return {
        execute: async () => {
            try {
                const product = await deleteProductService(command).find()

                if(product){
                    await deleteProductService(command).delete()
                    return {
                        data: {
                            message: "Product deleted successfully"
                        }
                    }
                }
                return {
                    data: {
                        message: "fail",
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