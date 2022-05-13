import { Ingredient } from "./ingredient";

export enum Type {
  SOUP = "zupa",
  FOOD = "potrawa",
  RAW_SALAD = "surówka",
  SALAD = "sałatka",
  SAUCE = "sos",
}

interface IMeal {
  format(): void;
}

export class Meal implements IMeal {
  private _name: string;
  private _type: Type;
  private _ingredients: Ingredient[];

  constructor(name: string, type: Type, ingredients: Ingredient[]) {
    this._name = name;
    this._type = type;
    this._ingredients = ingredients;
  }

  get name(): string {
    return this._name;
  }

  public format(): void {
    console.log(`Meal "${this.name}".`);
  }
}
