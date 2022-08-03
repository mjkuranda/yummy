import mongoose from "mongoose";

interface IMealSchema {
    author: String;
    posted: String;
    details: {
        title: String;
        description: String;
    };
    ingredients: String[];
}

const mealSchema = new mongoose.Schema<IMealSchema>({
    author: String,
    posted: String,
    details: {
        title: String,
        description: String,
    },
    ingredients: [String],
});

export const MealModel = mongoose.model<IMealSchema>("Meal", mealSchema);
