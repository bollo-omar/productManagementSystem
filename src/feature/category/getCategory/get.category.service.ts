import {prisma} from "@/shared/db";
import {GetCategoryQuery} from "@/feature/category/getCategory/get.category.query";

export const getCategoryService = (payload: GetCategoryQuery) => {
    return {
        find: async () => {
            return prisma.category.findUnique({
                where : payload
            })
        }
    }
}