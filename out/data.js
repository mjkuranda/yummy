"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ingredient_1 = require("./classes/ingredient");
const meal_1 = require("./classes/meal");
/* Ingredients */
var I_CARROT = new ingredient_1.Ingredient("marchew");
var I_KOSTKA = new ingredient_1.Ingredient("kostka rosołowa");
var I_MIELONE = new ingredient_1.Ingredient("mielone");
/* Meals */
let meals = [
    new meal_1.Meal("pomidorowa", meal_1.Type.SOUP, [I_CARROT, I_KOSTKA]),
    new meal_1.Meal("klopsy", meal_1.Type.FOOD, [I_MIELONE]),
];
