"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = exports.Type = void 0;
var Type;
(function (Type) {
    Type["SOUP"] = "zupa";
    Type["FOOD"] = "potrawa";
    Type["RAW_SALAD"] = "sur\u00F3wka";
    Type["SALAD"] = "sa\u0142atka";
    Type["SAUCE"] = "sos";
})(Type = exports.Type || (exports.Type = {}));
class Meal {
    constructor(name, type, ingredients) {
        this._name = name;
        this._type = type;
        this._ingredients = ingredients;
    }
    get name() {
        return this._name;
    }
    format() {
        console.log(`Meal "${this.name}".`);
    }
}
exports.Meal = Meal;
