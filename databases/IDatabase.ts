import Meal from "../src/classes/Meal";

export interface IQuery {
    ings: string[];
    types: string[];
}

export interface IDatabase {
    init(): Promise<void>;
    isInitialized(): boolean;

    /*
     *   @param query: ObjectArray that contains ingredients' names
     */
    get(query: IQuery): Promise<[Meal] | null>;

    /*
     *   @param id: Meal id from the database
     */
    getWithId(id: string): Promise<Meal | null>;

    // add(): Promise<void>;
    // delete(): Promise<void>;
    // update(): Promise<void>;
}
