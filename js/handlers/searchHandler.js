"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeals = exports.checkedIngredients = exports.categorizeIngredients = void 0;
const data_1 = require("../data");
// import { db } from "../db";
const categories_1 = require("../enums/categories");
/*
    Returns array of ingredients' categories
    that are consisted of ingredients themselves types.
*/
const categorizeIngredients = () => {
    let categorized = [];
    Object.values(categories_1.Category).forEach((category) => {
        let cat = {
            category: category,
            ingredients: [],
        };
        categorized.push(cat);
    });
    const ingr = Object.values(data_1.ingredients);
    ingr.forEach((el) => {
        for (let i = 0; i < categorized.length; i++) {
            if (categorized[i].category == el.category) {
                categorized[i].ingredients.push(el);
                break;
            }
        }
    });
    return categorized;
};
exports.categorizeIngredients = categorizeIngredients;
/*
    Returns an array consisted of boolean values
    for each ingredient (checked or not)
*/
const checkedIngredients = (ingsAsQuery) => {
    if (ingsAsQuery === undefined)
        return null;
    let ings = [];
    const ingsIds = ingsAsQuery.map((i) => {
        return +i;
    });
    Object.keys(data_1.ingredients).forEach((i, id) => {
        ings[id] = ingsIds.includes(id, 0);
    });
    return ings;
};
exports.checkedIngredients = checkedIngredients;
/*
    @param filters object containing:
    ingredients, type
*/
const getMeals = (filters) => {
    // console.log(db);
    if (filters.ingredients.length >= 1)
        return null;
    return null;
};
exports.getMeals = getMeals;
