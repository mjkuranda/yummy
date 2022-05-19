import { Category } from "../enums/categories";
import { Icon } from "./icon";

export class Ingredient {
    private _name: string;
    private _category: Category;
    private _icon: Icon;

    constructor(category: Category, icon: Icon, name: string) {
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
