import Ingredient from "./classes/Ingredient";
import Icon from "./classes/Icon";
import Category from "./enums/categories";

/* Elements for subsites */
export const elements = {
    main: {
        links: [
            { link: "index" },
            { link: "index-media" },
            { link: "mobile/index" },
        ],
        scripts: [],
    },
    search: {
        links: [
            { link: "header" },
            { link: "search" },
            { link: "search-media" },
            { link: "mobile/header" },
            { link: "mobile/search" },
        ],
        scripts: [],
    },
    resultId: {
        links: [
            { link: "header", prefix: "../" },
            { link: "result", prefix: "../" },
            { link: "result-media", prefix: "../" },
            { link: "mobile/header", prefix: "../" },
            { link: "mobile/result", prefix: "../" },
        ],
        scripts: [],
    },
    mealsAdd: {
        links: [
            { link: "header", prefix: "../" },
            { link: "meals-add", prefix: "../" },
            { link: "search", prefix: "../" },
        ],
        scripts: [],
        prefixPath: "../",
    },
    mealsAddNew: {
        links: [
            { link: "header", prefix: "../" },
            { link: "meals-add", prefix: "../" },
            { link: "meals-add-new", prefix: "../" },
        ],
        scripts: [],
        prefixPath: "../",
    },
    mealsAddNewError: {
        links: [
            { link: "header", prefix: "../" },
            { link: "meals-add-new-error", prefix: "../" },
        ],
        scripts: [],
        prefixPath: "../",
    },
};

/* Meal Validator */
export const mealValidator = {
    author: "^[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż\\s]{4,}$",
    description: "^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\\s]{15,511}$",
    title: "^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\\s]{3,31}$",
};

/* Icons */
export const icons = {
    listView: new Icon(
        "list-view",
        "",
        undefined,
        "https://icons8.com/icon/13296/list-view"
    ),
    noImage: new Icon(
        "no-image",
        "",
        undefined,
        "https://icons8.com/icon/1G2BW7-tQJJJ/no-image"
    ),
    // Food - berries
    blueberry: new Icon(
        "blueberry",
        "/food/berries",
        undefined,
        "https://icons8.com/icon/gliul3LO5hl8/blueberry"
    ),
    cherry: new Icon(
        "cherry",
        "/food/berries",
        undefined,
        "https://icons8.com/icon/19527/cherry"
    ),
    grapes: new Icon(
        "grapes",
        "/food/berries",
        undefined,
        "https://icons8.com/icon/18051/grapes"
    ),
    raspberry: new Icon(
        "raspberry",
        "/food/berries",
        undefined,
        "https://icons8.com/icon/19529/raspberry"
    ),
    strawberry: new Icon(
        "strawberry",
        "/food/berries",
        undefined,
        "icons8.com/icon/18041/strawberry"
    ),
    // Food - fruits
    citrus: new Icon(
        "citrus",
        "/food/fruits",
        undefined,
        "https://icons8.com/icon/18044/citrus"
    ),
    orange: new Icon(
        "orange",
        "/food/fruits",
        undefined,
        "https://icons8.com/icon/57233/orange"
    ),
    whole_apple: new Icon(
        "whole-apple",
        "/food/fruits",
        undefined,
        "https://icons8.com/icon/ngSSMNrR5GFG/whole-apple"
    ),
    // Food - seafish
    fish_food: new Icon(
        "fish-food",
        "/food/seafish",
        undefined,
        "https://icons8.com/icon/12881/fish-food"
    ),
    // Food - vegetables
    broccoli: new Icon(
        "broccoli",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/18042/broccoli"
    ),
    carrot: new Icon(
        "carrot",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/12865/carrot"
    ),
    cauliflower: new Icon(
        "cauliflower",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/37346/cauliflower"
    ),
    celery: new Icon(
        "celery",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/19021/celery"
    ),
    kohlrabi: new Icon(
        "kohlrabi",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/20946/kohlrabi"
    ),
    leek: new Icon(
        "leek",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/20945/leek"
    ),
    pumpkin: new Icon(
        "pumpkin",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/17358/pumpkin"
    ),
    tomato: new Icon(
        "tomato",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/18102/tomato"
    ),
    white_beans: new Icon(
        "white-beans",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/acRHc7YOO8Ms/white-beans"
    ),
    zucchini: new Icon(
        "zucchini",
        "/food/vegetables",
        undefined,
        "https://icons8.com/icon/64431/zucchini"
    ),
};

/* Ingredients */
export const ingredients = {
    // berries
    blueberry: new Ingredient(Category.BERRIES, icons.blueberry, "borówka"),
    cherry: new Ingredient(Category.BERRIES, icons.cherry, "wiśnia"),
    grapes: new Ingredient(Category.BERRIES, icons.grapes, "winogrono"),
    raspberry: new Ingredient(Category.BERRIES, icons.raspberry, "malina"),
    strawberry: new Ingredient(Category.BERRIES, icons.strawberry, "truskawka"),
    // fruits
    citrus: new Ingredient(Category.FRUITS, icons.citrus, "cytryna"),
    orange: new Ingredient(Category.FRUITS, icons.orange, "pomarańcz"),
    whole_apple: new Ingredient(Category.FRUITS, icons.whole_apple, "jabłko"),
    // seafish
    fish_food: new Ingredient(Category.SEAFISH, icons.fish_food, "ryba"),
    // vegetables
    broccoli: new Ingredient(Category.VEGETABLES, icons.broccoli, "brokuła"),
    carrot: new Ingredient(Category.VEGETABLES, icons.carrot, "marchew"),
    cauliflower: new Ingredient(
        Category.VEGETABLES,
        icons.cauliflower,
        "kalafior"
    ),
    celery: new Ingredient(Category.VEGETABLES, icons.celery, "seler"),
    kohlrabi: new Ingredient(Category.VEGETABLES, icons.kohlrabi, "kalarepa"),
    leek: new Ingredient(Category.VEGETABLES, icons.leek, "por"),
    pumpkin: new Ingredient(Category.VEGETABLES, icons.pumpkin, "dynia"),
    tomato: new Ingredient(Category.VEGETABLES, icons.tomato, "pomidor"),
    white_beans: new Ingredient(
        Category.VEGETABLES,
        icons.white_beans,
        "biała fasolka"
    ),
    zucchini: new Ingredient(Category.VEGETABLES, icons.zucchini, "cukinia"),
};
