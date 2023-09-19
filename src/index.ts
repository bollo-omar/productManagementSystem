import 'dotenv/config';
import 'module-alias/register';
import App from "./app";
import {PORT} from "@/shared/constants";
import User from "@/feature/user/user";

const app = new App(
    PORT,
    [ new User()]
);
app.listen()