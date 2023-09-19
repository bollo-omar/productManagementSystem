export default class AddUserCommand{
    constructor(
       public  readonly  firstname : string,
       public readonly  lastname : string,
       public readonly  email : string,
       public readonly role : "ADMIN" | "USER",
       public readonly  password : string
    ) {
    }
}