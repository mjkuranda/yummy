import mongoose from "mongoose";
import { Type as MealType } from "../../src/classes/Meal";

interface IMealSchema {
    author: String;
    description: String;
    image: string;
    ingredients: String[];
    posted: String;
    title: String;
    type: MealType;
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
        enum: MealType,
        default: MealType.FOOD,
        required: true,
    },
});

const MealModel = mongoose.model<IMealSchema>("Meal", mealSchema);
export default MealModel;
