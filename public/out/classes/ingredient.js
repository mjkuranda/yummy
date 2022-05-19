export class Ingredient {
    _name;
    _category;
    _icon;
    constructor(category, icon, name) {
        this._category = category;
        this._icon = icon;
        this._name = name;
    }
    get category() {
        return this._category;
    }
    get icon() {
        return this._icon;
    }
    get name() {
        return this._name;
    }
}
