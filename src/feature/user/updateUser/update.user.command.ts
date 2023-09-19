export default class UpdateUserCommand {
    constructor(
        public  readonly id : number,
        public  readonly  firstname? : string,
        public readonly  lastname? : string,
        public readonly  email? : string,
        public readonly role? : "ADMIN" | "USER",
    ) {
    }
}