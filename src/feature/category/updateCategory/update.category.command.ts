export default class UpdateCategoryCommand {
    constructor(
        public readonly id: number,
        public readonly name: string,
    ) {
    }
}