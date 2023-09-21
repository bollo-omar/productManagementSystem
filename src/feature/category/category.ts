import {IRoute} from "@/shared/interfaces/IRouter";
import {Router} from "express";
import {categoryRoutes} from "@/feature/category/category.routes";
import {addCategoryHandler} from "@/feature/category/addCategory/add.category.handler";
import {protect} from "@/shared/middlewares/auth.middleware";
import {getCategoryHandler} from "@/feature/category/getCategory/get.category.handler";
import {listCategoriesHandler} from "@/feature/category/listCategories/list.categories.handler";
import {updateCategoryHandler} from "@/feature/category/updateCategory/update.category.handler";
import {deleteCategoryHandler} from "@/feature/category/deleteCategory/delete.category.handler";

export default class Category implements IRoute {
    readonly router: Router = Router()

    constructor() {
        this.router.route(categoryRoutes.ADD).post(protect, addCategoryHandler)
        this.router.route(categoryRoutes.LIST).get(protect, listCategoriesHandler)
        this.router.route(categoryRoutes.GET_BY_ID).get(protect, getCategoryHandler)
        this.router.route(categoryRoutes.UPDATE).patch(protect, updateCategoryHandler)
        this.router.route(categoryRoutes.DELETE).delete(protect,deleteCategoryHandler )
    }

}