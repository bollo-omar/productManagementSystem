import {IRoute} from "@/shared/interfaces/IRouter"
import { Router } from "express";
import * as route from "./user.routes"
import {addUserHandler} from "@/feature/user/addUser/add.user.handler";
import {loginHandler} from "@/feature/user/login/login.handler";
import {protect} from "@/shared/middlewares/auth.middleware";
import {viewProfileHandler} from "@/feature/user/viewProfile/view.profile.handler";
import {updateUserHandler} from "@/feature/user/updateUser/update.user.handler";
import {listUsersHandler} from "@/feature/user/listUsers/list.users.handler";
import {getUserHandler} from "@/feature/user/getUser/get.user.handler";

export default class User implements IRoute {
     readonly router: Router = Router();

    constructor() {
        this.router.route(route.LOGIN).post(loginHandler)
        this.router.route(route.LIST_USERS).get(protect,listUsersHandler)
        this.router.route(route.GET_BY_ID).get(protect, getUserHandler)
        this.router.route(route.CREATE_USER).post(protect,addUserHandler)
        this.router.route(route.GET_PROFILE).get(protect,viewProfileHandler)
        this.router.route(route.UPDATE_USER).patch(protect,updateUserHandler)

    }
    
}