import { Ingredient } from "../classes/ingredient.js";
import { ingredients } from "../data.js";
import { Category } from "../enums/categories.js";

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
console.log("Categorized ingredients:", categorizeIngredients());

// const renderSearchIngredients = (): void => {
//     console.log("Render search ingredients");

//     const divEl: HTMLDivElement = document.createElement("div");
//     const h3El: HTMLHeadingElement = document.createElement("h3");
//     const ulEl: HTMLUListElement = document.createElement("ul");

//     Object.keys(ingredients).forEach((ingredient) => {
//         console.log(ingredient);
//     });

//     // Template
//     `
//     <div class="category">
//         <h3>Kategoria</h3>
//         <ul>
//             <li><input type="checkbox" /><label>Marchew</label></li>
//             <li><input type="checkbox" /><label>Marchew</label></li>
//             <li><input type="checkbox" /><label>Marchew</label></li>
//             <li><input type="checkbox" /><label>Marchew</label></li>
//             <li><input type="checkbox" /><label>Marchew</label></li>
//         </ul>
//     </div>
//     `;
// };

//renderSearchIngredients();
