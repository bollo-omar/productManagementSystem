import {IRoute} from "@/shared/interfaces/IRouter"
import { Router } from "express";
import {productRoutes} from "@/feature/product/product.routes";
import {protect} from "@/shared/middlewares/auth.middleware";
import {addProductHandler} from "@/feature/product/addProduct/add.product.handler";
import {getProductHandler} from "@/feature/product/getProduct/get.product.handler";
import {listProductByCategoryHandler} from "@/feature/product/listProductsByCategory/list.productByCategory.handler";
import {updateProductHandler} from "@/feature/product/updateProduct/update.product.handler";
import {listProductHandler} from "@/feature/product/listProducts/list.product.handler";
import {deleteProductHandler} from "@/feature/product/deleteProduct/delete.product.handler";

export default class Product implements IRoute {
    router: Router = Router()
    
    constructor() {
        this.router.route(productRoutes.ADD).post(protect, addProductHandler)
        this.router.route(productRoutes.LIST).get(protect, listProductHandler)
        this.router.route(productRoutes.GET_BY_ID).get(protect, getProductHandler)
        this.router.route(productRoutes.LIST_BY_CATEGORY).get(protect, listProductByCategoryHandler)
        this.router.route(productRoutes.UPDATE).patch(protect, updateProductHandler)
        this.router.route(productRoutes.DELETE).delete(protect,deleteProductHandler)
    }
}