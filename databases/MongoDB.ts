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

    public async get(query: IQuery): Promise<[Meal]> {
        const queryObject: { ingredients?: any; type?: any } = {};

        if (query.ings) {
            queryObject.ingredients = { $in: query.ings };
        }

        if (query.types) {
            queryObject.type = { $in: query.types };
        }

        const meals = (await MealModel.find(queryObject)) as [Meal];

        return meals;
    }

    public async getWithId(id: string): Promise<Meal | null> {
        return (await MealModel.findById(id)) as Meal;
    }
}

export default MongoDB;
