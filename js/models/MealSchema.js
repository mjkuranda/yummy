"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mealSchema = new mongoose_1.Schema({
    ingredients: [],
    title: String,
});
const Meal = (0, mongoose_1.model)("Meal", mealSchema);
