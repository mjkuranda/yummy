export var Type;
(function (Type) {
    Type["SOUP"] = "zupa";
    Type["FOOD"] = "potrawa";
    Type["RAW_SALAD"] = "sur\u00F3wka";
    Type["SALAD"] = "sa\u0142atka";
    Type["SAUCE"] = "sos";
})(Type || (Type = {}));
export class Meal {
    _name;
    _type;
    _ingredients;
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
