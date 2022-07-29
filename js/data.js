"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredients = exports.icons = exports.elements = void 0;
const ingredient_1 = require("./classes/ingredient");
const meal_1 = require("./classes/meal");
const icon_1 = require("./classes/icon");
const categories_1 = require("./enums/categories");
/* Elements for subsites */
exports.elements = {
    main: {
        links: ["index", "index-media"],
        scripts: [],
    },
    search: {
        links: ["header", "search", "search-media"],
        scripts: [],
    },
    result: {
        links: ["header", "result", "result-media"],
        scripts: [],
    },
};
/* Icons */
exports.icons = {
    listView: new icon_1.Icon("list-view", "/", undefined, "https://icons8.com/icon/13296/list-view"),
    // Food - berries
    blueberry: new icon_1.Icon("blueberry", "/food/berries", undefined, "https://icons8.com/icon/gliul3LO5hl8/blueberry"),
    cherry: new icon_1.Icon("cherry", "/food/berries", undefined, "https://icons8.com/icon/19527/cherry"),
    grapes: new icon_1.Icon("grapes", "/food/berries", undefined, "https://icons8.com/icon/18051/grapes"),
    raspberry: new icon_1.Icon("raspberry", "/food/berries", undefined, "https://icons8.com/icon/19529/raspberry"),
    strawberry: new icon_1.Icon("strawberry", "/food/berries", undefined, "icons8.com/icon/18041/strawberry"),
    // Food - fruits
    citrus: new icon_1.Icon("citrus", "/food/fruits", undefined, "https://icons8.com/icon/18044/citrus"),
    orange: new icon_1.Icon("orange", "/food/fruits", undefined, "https://icons8.com/icon/57233/orange"),
    whole_apple: new icon_1.Icon("whole-apple", "/food/fruits", undefined, "https://icons8.com/icon/ngSSMNrR5GFG/whole-apple"),
    // Food - seafish
    fish_food: new icon_1.Icon("fish-food", "/food/seafish", undefined, "https://icons8.com/icon/12881/fish-food"),
    // Food - vegetables
    broccoli: new icon_1.Icon("broccoli", "/food/vegetables", undefined, "https://icons8.com/icon/18042/broccoli"),
    carrot: new icon_1.Icon("carrot", "/food/vegetables", undefined, "https://icons8.com/icon/12865/carrot"),
    cauliflower: new icon_1.Icon("cauliflower", "/food/vegetables", undefined, "https://icons8.com/icon/37346/cauliflower"),
    celery: new icon_1.Icon("celery", "/food/vegetables", undefined, "https://icons8.com/icon/19021/celery"),
    kohlrabi: new icon_1.Icon("kohlrabi", "/food/vegetables", undefined, "https://icons8.com/icon/20946/kohlrabi"),
    leek: new icon_1.Icon("leek", "/food/vegetables", undefined, "https://icons8.com/icon/20945/leek"),
    pumpkin: new icon_1.Icon("pumpkin", "/food/vegetables", undefined, "https://icons8.com/icon/17358/pumpkin"),
    tomato: new icon_1.Icon("tomato", "/food/vegetables", undefined, "https://icons8.com/icon/18102/tomato"),
    white_beans: new icon_1.Icon("white-beans", "/food/vegetables", undefined, "https://icons8.com/icon/acRHc7YOO8Ms/white-beans"),
    zucchini: new icon_1.Icon("zucchini", "/food/vegetables", undefined, "https://icons8.com/icon/64431/zucchini"),
};
/* Ingredients */
exports.ingredients = {
    // berries
    blueberry: new ingredient_1.Ingredient(categories_1.Category.BERRIES, exports.icons.blueberry, "borówka"),
    cherry: new ingredient_1.Ingredient(categories_1.Category.BERRIES, exports.icons.cherry, "wiśnia"),
    grapes: new ingredient_1.Ingredient(categories_1.Category.BERRIES, exports.icons.grapes, "winogrono"),
    raspberry: new ingredient_1.Ingredient(categories_1.Category.BERRIES, exports.icons.raspberry, "malina"),
    strawberry: new ingredient_1.Ingredient(categories_1.Category.BERRIES, exports.icons.strawberry, "truskawka"),
    // fruits
    citrus: new ingredient_1.Ingredient(categories_1.Category.FRUITS, exports.icons.citrus, "cytryna"),
    orange: new ingredient_1.Ingredient(categories_1.Category.FRUITS, exports.icons.orange, "pomarańcz"),
    whole_apple: new ingredient_1.Ingredient(categories_1.Category.FRUITS, exports.icons.whole_apple, "jabłko"),
    // seafish
    fish_food: new ingredient_1.Ingredient(categories_1.Category.SEAFISH, exports.icons.fish_food, "ryba"),
    // vegetables
    broccoli: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.broccoli, "brokuła"),
    carrot: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.carrot, "marchew"),
    cauliflower: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.cauliflower, "kalafior"),
    celery: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.celery, "seler"),
    kohlrabi: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.kohlrabi, "kalarepa"),
    leek: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.leek, "por"),
    pumpkin: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.pumpkin, "dynia"),
    tomato: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.tomato, "pomidor"),
    white_beans: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.white_beans, "biała fasolka"),
    zucchini: new ingredient_1.Ingredient(categories_1.Category.VEGETABLES, exports.icons.zucchini, "cukinia"),
};
/* Meals */
let meals = [
    new meal_1.Meal("pomidorowa", meal_1.Type.SOUP, [exports.ingredients.carrot, exports.ingredients.carrot]),
    new meal_1.Meal("klopsy", meal_1.Type.RAW_SALAD, [exports.ingredients.celery]),
];
