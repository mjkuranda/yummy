import { Ingredient } from "./classes/ingredient";
import { Meal, Type } from "./classes/meal";

/* Ingredients */
var I_CARROT = new Ingredient("marchew");
var I_KOSTKA = new Ingredient("kostka rosołowa");
var I_MIELONE = new Ingredient("mielone");

/* Meals */
let meals: Meal[] = [
    new Meal("pomidorowa", Type.SOUP, [I_CARROT, I_KOSTKA]),
    new Meal("klopsy", Type.FOOD, [I_MIELONE]),
];
