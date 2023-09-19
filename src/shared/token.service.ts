import jwt, {Secret} from 'jsonwebtoken';
import {TOKEN_EXPIRY_TIME, JWT_SECRET} from "@/shared/constants";
import {IToken} from "@/shared/interfaces/IToken";

export const tokenService = () => {

    return {
        signToken: async (payload: {}): Promise<string> => {
            return jwt.sign(
                payload,
                JWT_SECRET as Secret,
                {
                    expiresIn: TOKEN_EXPIRY_TIME
                }
            )
        },
        verifyToken: async (token: string): Promise<jwt.VerifyErrors | IToken> => {
            return new Promise((resolve, reject) => {
                jwt.verify(token, JWT_SECRET as Secret, (err, payload) => {
                    if (err) return reject(err);

                    resolve(payload as IToken)
                })
            })
        }
    }
}