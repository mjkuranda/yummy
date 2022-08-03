import mongoose from "mongoose";
import { IDatabase } from "./IDatabase";
import { Meal } from "../src/classes/meal";
import { MealModel } from "../databases/models/MealModel";

export class MongoDB implements IDatabase {
    private isConnected: boolean;

    constructor() {
        this.isConnected = false;
    }

    public async init(): Promise<void> {
        mongoose.connect("mongodb://localhost:27017/yummy");

        const db = mongoose.connection;
        db.on("error", () => console.error("MongoDB Connection error"));
        db.once("open", () => {
            console.log("Connected to the db!");
            this.isConnected = true;
        });

        console.log("MongoDB has been initialized!");
    }

    public isInitialized(): boolean {
        return this.isConnected;
    }

    public async get(ings: string[]): Promise<[Meal]> {
        const meals = (await MealModel.find({
            ingredients: { $in: ings },
        })) as [Meal];

        return meals;
    }
}
