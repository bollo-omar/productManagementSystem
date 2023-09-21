import {prisma} from "@/shared/db";
import {ListProductByCategoryQuery} from "@/feature/product/listProductsByCategory/list.productByCategory.query";

export const listProductByCategoryService = (payload: ListProductByCategoryQuery) => {

    return {
        listByCategory: async () => {
            const {categoryID, ...paginator} = payload
            return prisma.product.findMany({
                where :  {
                    categoryID
                },
                ...paginator

            })
        }
    }
}