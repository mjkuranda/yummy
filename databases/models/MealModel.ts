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
        required: [true, "Wymagany autor posiłku"],
        validate: [
            function (val: string) {
                return val.length >= 4;
            },
            "Zbyt krótka nazwa autora (min. 4 znaki)",
        ],
    },
    description: {
        type: String,
        required: [true, "Wymagany opis posiłku"],
        validate: [
            // [16, 512] length
            function (val: string) {
                return !!val && val.length >= 16 && val.length <= 512;
            },
            "Nazwa posiłku powinna zawierać od 16 do 512 znaków",
        ],
    },
    image: String,
    ingredients: {
        type: [String],
        required: true,
        validate: [
            function (val: any) {
                return val.length > 0;
            },
            "Posiłek powinien zawierać chociaż jeden składnik",
        ],
    },
    posted: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: [true, "Wymagana nazwa posiłku"],
        validate: [
            // [4, 32] length
            function (val: any) {
                return !!val && val.length >= 4 && val.length <= 32;
            },
            "Nazwa posiłku powinna zawierać od 4 do 32 znaków",
        ],
    },
    type: {
        type: String,
        required: [true, "Wymagany typ posiłku"],
    },
});

const MealModel = mongoose.model<IMealSchema>("Meal", mealSchema);
export default MealModel;
