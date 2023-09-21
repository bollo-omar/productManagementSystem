import {prisma} from "@/shared/db";

import DeleteCategoryCommand from "@/feature/category/deleteCategory/delete.category.command";

export const deleteCategoryService = (payload: DeleteCategoryCommand) => {
    return {
        delete: async () => {
            return prisma.category.delete({
                where: payload
            })
        },
        find :async ()=>{
            return prisma.category.findUnique({
                where : {
                    id : payload.id
                }
            })
        }
    }
}