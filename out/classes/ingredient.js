"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredient = void 0;
class Ingredient {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
exports.Ingredient = Ingredient;
