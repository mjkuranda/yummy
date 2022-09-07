import Meal from "../src/classes/Meal";

export interface IQuery {
    ings?: string[];
    types?: string[];
    id?: string;
}

export interface IDatabase {
    init(): Promise<void>;
    isInitialized(): boolean;

    get(query: IQuery): Promise<[Meal] | Meal | null>;
    post(meal: Meal): Promise<void>;
    put(id: string, newMeal: Meal): Promise<void>;
    delete(id: string): Promise<void>;
}
