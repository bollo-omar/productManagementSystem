import {prisma} from "@/shared/db";
import UpdateCategoryCommand from "@/feature/category/updateCategory/update.category.command";

export const updateCategoryService = (payload: UpdateCategoryCommand) => {
    return {
        update: async () => {
            return prisma.category.update({
                where: {
                    id: payload.id
                },
                data: {name: payload.name}
            })
        },
        find : ()=>{
            return prisma.category.findUnique({
                where : {
                    id : payload.id
                }
            })
        }
    }
}