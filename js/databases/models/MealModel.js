"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mealSchema = new mongoose_1.default.Schema({
    author: String,
    posted: String,
    details: {
        title: String,
        description: String,
    },
    ingredients: [String],
});
exports.MealModel = mongoose_1.default.model("Meal", mealSchema);
