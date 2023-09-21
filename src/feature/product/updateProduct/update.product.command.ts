export default class UpdateProductCommand {
    constructor(
        public readonly id : number,
        public readonly name: string,
        public readonly unit: string,
        public readonly unitPrice: number,
        public readonly quantity: number,
    ) {
    }
}