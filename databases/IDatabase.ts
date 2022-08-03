import { Meal } from "../src/classes/meal";

export interface IDatabase {
    init(): Promise<void>;

    /*
     *   @param ings: Array that contains ingredients' names
     */
    get(ings: string[]): Promise<[Meal] | null>;

    // add(): Promise<void>;
    // delete(): Promise<void>;
    // update(): Promise<void>;
}
