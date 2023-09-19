import {IRoute} from "@/shared/interfaces/IRouter";
import { Router } from "express";

export default class Category implements IRoute {
    readonly router: Router  = Router()
    constructor() {
      
    }
    
}