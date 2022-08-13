import mongoose from "mongoose";

interface IMealSchema {
    author: String;
    description: String;
    image: String;
    ingredients: String[];
    posted: String;
    title: String;
    type: String;
}

const mealSchema = new mongoose.Schema<IMealSchema>({
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: String,
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
    posted: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

const MealModel = mongoose.model<IMealSchema>("Meal", mealSchema);
export default MealModel;
