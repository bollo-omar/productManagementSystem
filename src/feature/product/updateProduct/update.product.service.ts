import {prisma} from "@/shared/db";
import UpdateProductCommand from "@/feature/product/updateProduct/update.product.command";

export const updateProductService = (payload: UpdateProductCommand) => {
    const {id, ...newProduct} = payload
    return {
        update: async () => {
            return prisma.product.update({
                where: {id},
                data: payload
            })
        },
        find: async () => {
            return prisma.product.findUnique({
                where: {
                    id: payload.id
                }
            })
        }
    }
}