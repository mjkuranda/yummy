import mongoose from "mongoose";
import { MealModel } from "./models/MealModel";

// mongoose
//     .connect("mongodb://localhost:27017/yummy")
//     .then(() => console.log("Connected to database!"))
//     .catch((error) => console.error(error));
mongoose.connect("mongodb://localhost:27017/yummy");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error")).once(
    "open",
    () => console.log("Connected to the db!")
);

export const getMeals = async (): Promise<any> => {
    const meals = await MealModel.find();
    return meals;
};

export const x = 5;

// export const db = mongoose.connection;
