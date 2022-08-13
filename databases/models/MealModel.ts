import mongoose from "mongoose";

interface IMealSchema {
    author: String;
    posted: String;
    title: String;
    description: String;
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
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
        validate: [
            function (val: any) {
                return val.length > 0;
            },
            "Posiłek powinien zawierać chociaż jeden składnik!",
        ],
    },
    image: String,
});

const MealModel = mongoose.model<IMealSchema>("Meal", mealSchema);
export default MealModel;
