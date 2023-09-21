import {deleteCategoryService} from "@/feature/category/deleteCategory/delete.category.service";
import DeleteCategoryCommand from "@/feature/category/deleteCategory/delete.category.command";

export const deleteCategoryMediator = (command: DeleteCategoryCommand) => {

    return {
        execute: async () => {
            try {
                const category = await deleteCategoryService(command).find();
                if (category) {
                    await deleteCategoryService(command).delete()
                    return {
                        data: {
                            message: "category deleted successfully"
                        }
                    }
                }
                return {
                    data: {
                        message: "fail",
                        reason : "category not found"
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