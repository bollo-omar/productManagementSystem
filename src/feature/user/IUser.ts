export interface IUser {
    id: number
    firstname: string
    lastname: string
    email: string
    role: "ADMIN" | "USER"
    password: string
    createdAt?: Date | null
    updatedAt?: Date | null
}