import mongoose from "mongoose";
import dotenv from "dotenv";
import { IDatabase, IQuery } from "./IDatabase";
import Meal from "../src/classes/Meal";
import MealModel from "../databases/models/MealModel";

class MongoDB implements IDatabase {
    private isConnected: boolean;

    constructor() {
        this.isConnected = false;
        dotenv.config();
    }

    public async init(): Promise<void> {
        if (process.env.DEPLOY) {
            let credentials = `${process.env.DB_USER}:${process.env.DB_PASS}`;

            await mongoose.connect(
                `mongodb+srv://${credentials}@yummy.g9zlzc3.mongodb.net/?retryWrites=true&w=majority`
            );
        } else {
            await mongoose.connect("mongodb://localhost:27017/yummy");
        }

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

    public async get(query: IQuery): Promise<[Meal] | Meal | null> {
        const queryObject: { ingredients?: any; type?: any; id?: string } = {};

        if (query.id) {
            return (await MealModel.findById(query.id)) as Meal;
        }

        if (!query.ings && !query.types) {
            return null;
        }

        if (query.ings) {
            queryObject.ingredients = { $in: query.ings };
        }

        if (query.types) {
            queryObject.type = { $in: query.types };
        }

        return (await MealModel.find(queryObject)) as [Meal];
    }

    public async post(meal: Meal): Promise<any> {
        const mealModel = new MealModel({
            author: meal.author,
            description: meal.description,
            ingredients: meal.ingredients,
            posted: meal.posted,
            title: meal.title,
            type: meal.type,
        });
        let result;

        try {
            result = await mealModel.save();
        } catch (err: any) {
            throw err;
        }

        return result;
    }

    public async put(id: string, newMeal: Meal): Promise<void> {}

    public async delete(id: string): Promise<void> {}
}

export default MongoDB;
