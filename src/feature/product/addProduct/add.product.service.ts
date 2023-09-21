import {prisma} from "@/shared/db";
import AddProductCommand from "@/feature/product/addProduct/add.product.command";
import {v4 as uuid} from "uuid";

export const addProductService = (payload: AddProductCommand) => {
    return {
        add: async () => {
            const {unitPrice, ...rest} = payload
            return prisma.product.create({data:{ unitPrice : unitPrice.toFixed(2),...rest, slug :  uuid()}})
        },
        findCategory : ()=>{
            return prisma.category.findUnique({where : {id : payload.categoryID}})
        }
    }
}