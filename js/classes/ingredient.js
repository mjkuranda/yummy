"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
class IngredientStaticData {
    static getNewIndex() {
        return this._lastIndex++;
    }
    static getIndex() {
        return this._lastIndex;
    }
}
IngredientStaticData._lastIndex = 0;
class Ingredient {
    constructor(category, icon, name) {
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
exports.Ingredient = Ingredient;
