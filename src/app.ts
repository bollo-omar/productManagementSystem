import express, {Application, json} from "express";
import {IRoute} from "@/shared/interfaces/IRouter"
import helmet from "helmet";
import * as path from "path";
import compression from "compression";
import cors from "cors";
import morganMiddleware from "@/shared/middlewares/morgan.middleware";
import {globalErrorHandler, notFoundErrorHandler } from "@/shared/middlewares/error.middleware";
import logger from "./shared/logger";
import {baseUrl} from "@/feature/user/user.routes";
import {BASE_URL} from "@/shared/constants";

export default class App{
    private readonly  express  : Application = express()
    private readonly port :number
    
    constructor(port : number,routes : IRoute[]){
        this.express = express()
        this.port = port        
        this.initMiddlewares();
        this.initRoutes(routes);
        this.initErrorHandler();
       
    }
    
    private initRoutes(routes : IRoute[]){
        routes.map(route=>{
            this.express.use(BASE_URL, route.router)
        })
    }
    private initErrorHandler(){
        this.express.use(notFoundErrorHandler);
        this.express.use(globalErrorHandler);
    }
    
    private initMiddlewares(){
        this.express.use(helmet())
        this.express.use(cors());
        this.express.use(morganMiddleware)
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use('/resource', express.static(path.join(__dirname, '../public')));
        this.express.use(compression())
    }
    listen(){
        try {
            this.express.listen(this.port, ()=>{
                logger.info(`server started and listening on port : ${this.port}`)
            })
        }
        catch (error : any) {
            logger.error('Error : ', error.message);
        }
    }
}