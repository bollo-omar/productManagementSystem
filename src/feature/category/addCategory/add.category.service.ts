import {prisma} from "@/shared/db";
import AddCategoryCommand from "@/feature/category/addCategory/add.category.command";

export const addCategoryService = (payload: AddCategoryCommand) => {
    return {
        add: async () => {
            return prisma.category.create({data: payload})
        }
    }
}