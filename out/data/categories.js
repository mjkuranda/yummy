class Category {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    format() {
        console.log(`Category "${this.name}".`);
    }
}
export let categories = [
    new Category("owoce"),
    new Category("warzywa")
];
