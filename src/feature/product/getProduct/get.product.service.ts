import {prisma} from "@/shared/db";
import {GetCategoryQuery} from "@/feature/category/getCategory/get.category.query";

export const getProductService = (payload: GetCategoryQuery) => {
    return {
        find: async () => {
            return prisma.product.findUnique({
                where : payload
            })
        }
    }
}