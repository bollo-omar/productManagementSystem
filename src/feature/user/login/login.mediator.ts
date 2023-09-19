import LoginCommand from "@/feature/user/login/login.command";
import {loginService} from "@/feature/user/login/login.service";
import {IUser} from "@/feature/user/IUser";
import {compare} from "bcryptjs";
import {tokenService} from "@/shared/token.service";

export const loginMediator = (command: LoginCommand) => {

    return {
        execute: async () => {
            try {
                const user: IUser | null = await loginService(command.email).login();
                if (!user) return {message: "user doesnt exists"}
                if (await compare(command.password, user.password)) {
                    const {password, ...rest} = user
                    return {
                        data: {
                            user : rest,
                            token : await tokenService().signToken({userId : user.id})
                        }
                    }
                }
                return {message: "wrong login credentials"}
            } catch (error: any) {
                return {
                    message: error.message
                }
            }

        }
    }

}