import mongoose from "mongoose";

interface IMealSchema {
    author: String;
    posted: String;
    details: {
        title: String;
        description: String;
    };
    ingredients: String[];
    image: string;
}

const mealSchema = new mongoose.Schema<IMealSchema>({
    author: {
        type: String,
        required: true,
    },
    posted: {
        type: String,
        required: true,
    },
    details: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    ingredients: {
        type: [String],
        required: true,
    },
    image: String,
});

export const MealModel = mongoose.model<IMealSchema>("Meal", mealSchema);
