import mongoose from "mongoose";
import { IDatabase, IQuery } from "./IDatabase";
import Meal from "../src/classes/Meal";
import MealModel from "../databases/models/MealModel";

export class MongoDB implements IDatabase {
    private isConnected: boolean;

    constructor() {
        this.isConnected = false;
    }

    public async init(): Promise<void> {
        await mongoose.connect("mongodb://localhost:27017/yummy");

        const db = mongoose.connection;
        db.on("error", () => console.error("MongoDB Connection error"));
        db.once("open", () => {
            console.log("Connected to the MongoDB!");
            this.isConnected = true;
        });

        console.log("MongoDB instance has been initialized");
    }

    public isInitialized(): boolean {
        return this.isConnected;
    }

    public async get(query: IQuery): Promise<[Meal]> {
        const queryObject: { ingredients: any; types: any } = {
            ingredients: undefined,
            types: undefined,
        };

        if (query.ings) {
            queryObject.ingredients = { $in: query.ings };
        }

        if (query.types) {
            queryObject.types = { $in: query.types };
        }

        const meals = (await MealModel.find(queryObject)) as [Meal];

        return meals;
    }

    public async getWithId(id: string): Promise<Meal | null> {
        return (await MealModel.findById(id)) as Meal;
    }
}
