import {prisma} from "@/shared/db";
import DeleteProductCommand from "@/feature/product/deleteProduct/delete.product.command";

export const deleteProductService = (payload: DeleteProductCommand) => {
    return {
        delete: async () => {
            return prisma.product.delete({
                where: payload
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