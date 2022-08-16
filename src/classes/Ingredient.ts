import Category from "../enums/categories";
import Icon from "./Icon";

class IngredientStaticData {
    private static _lastIndex = 0;

    public static getNewIndex(): number {
        return this._lastIndex++;
    }

    public static getIndex(): number {
        return this._lastIndex;
    }
}

export default class Ingredient {
    private _id: number;
    private _name: string;
    private _category: Category;
    private _icon: Icon;

    constructor(category: Category, icon: Icon, name: string) {
        this._category = category;
        this._icon = icon;
        this._name = name;
        this._id = IngredientStaticData.getNewIndex();
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

    get id() {
        return this._id;
    }
}
