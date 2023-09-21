import {prisma} from "@/shared/db";
import {ListProductQuery} from "@/feature/product/listProducts/list.product.query";

export const listProductService = (payload: ListProductQuery) => {
    return {
        list: async () => {
            return prisma.product.findMany(payload)
        }
    }
}