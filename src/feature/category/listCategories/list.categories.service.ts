import {prisma} from "@/shared/db";
import {ListCategoriesQuery} from "@/feature/category/listCategories/list.categories.query";

export const listCategoriesService = (payload: ListCategoriesQuery) => {
    return {
        list: async () => {
            return prisma.category.findMany({
                ...payload
            })
        }
    }
}