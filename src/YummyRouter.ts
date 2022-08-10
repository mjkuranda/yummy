import { Request, Response } from "express";
import multer from "multer";
import { IDatabase } from "../databases/IDatabase";
import { MealModel } from "../databases/models/MealModel";
import { elements, icons } from "./data";

import { categorizeIngredients } from "./handlers/searchHandler";

export class YummyRouter {
    constructor(private readonly db: IDatabase) {}

    public dev(req: Request, res: Response): void {
        console.log("test dev func");
        res.send("Test dev func");
    }

    public main(req: Request, res: Response): void {
        res.render("main", {
            elements: elements.main,
            isNotMain: res.req.url !== "/",
        });
    }

    public async search(req: Request, res: Response): Promise<void> {
        const ings = req.query.ings as string[];
        const meals = await this.db.get(ings);

        res.render("search", {
            elements: elements.search,
            isNotMain: res.req.url !== "/",
            filter: {
                icons: icons,
                categorized: categorizeIngredients(),
            },
            helpers: {
                tryToCheck(ingredientKey: string) {
                    return ings?.includes(ingredientKey) ? "checked" : "";
                },
            },
        });
    }

    public result(req: Request, res: Response): void {
        res.render("result", {
            elements: elements.result,
            isNotMain: res.req.url !== "/",
        });
    }

    public mealsAdd(req: Request, res: Response): void {
        res.render("meals-add", {
            prefixPath: "../",
            elements: elements.mealsAdd,
            isNotMain: res.req.url !== "/",
            filter: {
                icons: icons,
                categorized: categorizeIngredients(),
            },
        });
    }

    public async mealsAddNew(req: Request, res: Response): Promise<void> {
        const meal = new MealModel({
            author: req.body.author,
            posted: new Date().getTime(),
            details: {
                title: req.body.title,
                description: req.body.description,
            },
            ingredients: req.body["ings"],
        });

        if (req.file) {
            meal.image = req.file.path.split("\\")[1];
        }

        // Mapping selected icons
        let ingIcons = [];
        for (const ing of meal.ingredients) {
            ingIcons.push(icons[ing as keyof typeof icons]);
        }

        try {
            const newMeal = await meal.save();
            res.status(201).render("meals-add-new", {
                prefixPath: "../",
                elements: elements.mealsAddNew,
                isNotMain: res.req.url !== "/",
                meal: newMeal,
                icons: ingIcons,
            });
        } catch (err) {
            res.status(400);
        }
    }

    public mealsAddNewError(err: any, req: Request, res: Response): any {
        if (err instanceof multer.MulterError) {
            switch (err.code) {
                case "LIMIT_FILE_SIZE":
                    res.send("Plik jest zbyt duży");
                    break;
            }
        }
    }

    public error404(req: Request, res: Response): void {
        res.status(404);
        res.render("404");
    }

    public error500(err: any, res: Response): void {
        res.status(500);
        res.render("500");
        console.error(err.message);
    }
}
