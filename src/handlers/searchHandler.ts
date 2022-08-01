import { Ingredient } from "../classes/ingredient";
import { Meal } from "../classes/meal";
import { ingredients } from "../data";
// import { db } from "../db";
import { Category } from "../enums/categories";

interface ICategorized {
    category: Category;
    ingredients: Ingredient[];
}

/*
    Returns array of ingredients' categories
    that are consisted of ingredients themselves types.
*/
export const categorizeIngredients = (): ICategorized[] => {
    let categorized: ICategorized[] = [];
    Object.values(Category).forEach((category: Category) => {
        let cat: ICategorized = {
            category: category,
            ingredients: [],
        };
        categorized.push(cat);
    });

    const ingr: Ingredient[] = Object.values(ingredients);
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

/*
    Returns an array consisted of boolean values
    for each ingredient (checked or not)
*/
export const checkedIngredients = (
    ingsAsQuery: string[] | undefined
): boolean[] | null => {
    if (ingsAsQuery === undefined) return null;

    let ings: boolean[] = [];
    const ingsIds: number[] = ingsAsQuery.map((i) => {
        return +i;
    });

    Object.keys(ingredients).forEach((i, id) => {
        ings[id] = ingsIds.includes(id, 0);
    });

    return ings;
};

type FilterType = {
    ingredients: Ingredient[];
    type: string;
};

/*
    @param filters object containing:
    ingredients, type
*/
export const getMeals = (filters: FilterType): Meal[] | null => {
    // console.log(db);

    if (filters.ingredients.length >= 1) return null;
    return null;
};
