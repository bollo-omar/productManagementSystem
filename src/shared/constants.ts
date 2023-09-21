import * as process from "process";
import {Secret} from "jsonwebtoken";
export const BASE_URL: string = '/api/v1';
export const TOKEN_EXPIRY_TIME: string = process.env.TOKEN_EXPIRY_TIME as string
export const JWT_SECRET: string = process.env.JWT_SECRET as string
export const PORT: number = parseInt(process.env.PORT as string) || 3000;