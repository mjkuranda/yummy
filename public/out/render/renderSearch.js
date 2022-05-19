import { ingredients } from "../data.js";
import { Category } from "../enums/categories.js";
/*
    Returns array of ingredients' categories
    that are consisted of ingredients themselves types.
*/
export const categorizeIngredients = () => {
    let categorized = [];
    Object.values(Category).forEach((category) => {
        let cat = {
            category: category,
            ingredients: [],
        };
        categorized.push(cat);
    });
    const ingr = Object.values(ingredients);
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
