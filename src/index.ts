import 'dotenv/config';
import 'module-alias/register';
import App from "./app";
import {PORT} from "@/shared/constants";
import User from "@/feature/user/user";
import Category from "@/feature/category/category";
import Product from "@/feature/product/product";

const app = new App(
    PORT,
    [
        new User(),
        new Category(),
        new Product()
    ]
);
app.listen()