import {IRoute} from "@/shared/interfaces/IRouter"
import { Router } from "express";

export default class Product implements IRoute {
    router: Router = Router()
    
    constructor() {
    }
}