import { throws } from "assert";
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
}

export default class Meal implements IMeal {
    // private author: string;
    // private description: string;
    // private ingredients: string[]; // TODO: Do Ingredient[] instead
    // private posted: string;
    // private title: string;
    // private type: Type;
    private _relevance?: number;

    // constructor(
    //     author: string,
    //     description: string,
    //     ingredients: string[],
    //     posted: string,
    //     title: string,
    //     type: Type
    // ) {
    //     this.author = author;
    //     this.description = description;
    //     this.ingredients = ingredients;
    //     this.posted = posted;
    //     this.title = title;
    //     this.type = type;

    //     this.relevance = 0;
    // }
    private _image: string;

    constructor(
        private readonly _author: string,
        private readonly _description: string,
        private readonly _ingredients: string[],
        private readonly _posted: number,
        private readonly _title: string,
        private readonly _type: Type
    ) {
        this._relevance = 0;
        this._image = "";
    }

    get author(): string {
        return this._author;
    }

    get description(): string {
        return this._description;
    }

    get ingredients(): string[] {
        return this._ingredients;
    }

    get posted(): string {
        return `${this._posted}`;
    }

    get title(): string {
        return this._title;
    }

    get type(): Type {
        return this._type;
    }

    get image(): string {
        return this._image;
    }

    set image(image: string) {
        this._image = image;
    }

    get relevance(): number {
        return this._relevance ?? 0;
    }

    set relevance(revelance: number) {
        this._relevance = revelance;
    }

    public format(): void {
        console.log(`Meal "${this._title}".`);
    }
}
