import Ingredient from "./Ingredient";

export enum Type {
    SOUP = "zupa",
    FOOD = "potrawa",
    RAW_SALAD = "surówka",
    SALAD = "sałatka",
    SAUCE = "sos",
}

interface IMeal {
    format(): void;
    toString(): string;
}

export default class Meal implements IMeal {
    private _name: string;
    private _type: Type;
    private _ingredients: string[]; // TODO: Do Ingredient[] instead
    private _relevance?: number;

    constructor(name: string, type: Type, ingredients: string[]) {
        this._name = name;
        this._type = type;
        this._ingredients = ingredients;
        this._relevance = 0;
    }

    get name(): string {
        return this._name;
    }

    get type(): Type {
        return this._type;
    }

    get ingredients(): string[] {
        return this._ingredients;
    }

    get relevance(): number {
        return this._relevance ?? 0;
    }

    set relevance(revelance: number) {
        this._relevance = revelance;
    }

    public format(): void {
        console.log(`Meal "${this.name}".`);
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}
