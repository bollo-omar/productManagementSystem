export default class AddProductCommand {
    constructor(
        public readonly name: string,
        public readonly unit: string,
        public readonly unitPrice: number,
        public readonly quantity: number,
        public readonly categoryID?: number
    ) {
    }
}