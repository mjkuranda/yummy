import { Express, Router, Request, Response, NextFunction } from "express";
import { IDatabase, IQuery } from "../databases/IDatabase";
import MealModel from "../databases/models/MealModel";
import Ingredient from "./classes/Ingredient";
import { elements, icons, ingredients, mealValidator } from "./YummyData";

import { categorizeIngredients } from "./handlers/searchHandler";
import Meal, { Type } from "./classes/Meal";

import multer from "multer";
import { fileStorage, fileFilter } from "./handlers/multer";
import { FileSize } from "./enums/constants";

class YummyRouter {
    private router: Router;

    constructor(private readonly app: Express, private readonly db: IDatabase) {
        const upload = multer({
            storage: fileStorage,
            fileFilter: fileFilter,
            limits: { fileSize: FileSize.HALF_MB },
        }).single("image");

        this.router = Router();
        this.router.get("/", this.main.bind(this));
        this.router.get("/search", this.search.bind(this));
        this.router.get("/result/:id", this.resultId.bind(this));
        this.router.get("/meals/add", this.mealsAdd.bind(this));
        this.router.post(
            "/meals/add",
            upload,
            this.mealsAddNewError.bind(this),
            this.getMeal.bind(this),
            this.mealsAddNew.bind(this)
        );
        this.router.use("/meals/add", this.mealsAddNewError.bind(this));
        this.router.use(this.error404.bind(this));
        this.router.use(this.error500.bind(this));
    }

    public getRouter(): Router {
        return this.router;
    }

    private main(req: Request, res: Response): void {
        res.render("main", {
            elements: elements.main,
            isNotMain: res.req.url !== "/",
        });
    }

    private async search(req: Request, res: Response): Promise<void> {
        const ings = req.query.ings as string[];
        const types = req.query.types as string[];
        const query: IQuery = {
            ings: ings,
            types: types,
        };
        const meals = await this.db.get(query);

        const mealTypesValues = Object.values(Type);
        const mealTypes = Object.keys(Type).map((k: string, id: number) => {
            const val = mealTypesValues[id];
            const v = val.charAt(0).toUpperCase() + val.toLowerCase().slice(1);
            return { k, v };
        });

        // Define relevance of each meal
        meals?.map((meal) => {
            let relevance = 0;

            meal.ingredients.forEach((ing) => {
                if (ings.includes(ing)) {
                    relevance++;
                }
            });

            // The same count of ingredients as selected ingredients
            if (JSON.stringify(meal.ingredients) === JSON.stringify(ings)) {
                relevance++;
            }

            meal.relevance = relevance;

            return meal;
        });

        meals?.sort((a: Meal, b: Meal) => {
            if (b.relevance === a.relevance) {
                return a.ingredients.length - b.ingredients.length;
            } else return b.relevance - a.relevance;
        });

        // Paging
        const page = Number(req.query.page as string) ?? 1;
        const resultsPerPage = 15;
        const start = (page - 1) * resultsPerPage;
        let paggedMeals: Meal[] = [];
        for (let i = start; i < start + resultsPerPage; i++) {
            if (meals![i]) {
                paggedMeals.push(meals![i]);
            }
        }

        let pages = [];
        for (let p = 1; p <= meals!.length / resultsPerPage + 1; p++) {
            pages.push(p);
        }

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
                tryToCheckType(typeKey: string) {
                    return types?.includes(typeKey) ? "checked" : "";
                },
                sourceUrl() {
                    return res.req.url.split("/search?")[1];
                },
                page() {
                    return req.query.page ?? 1;
                },
                setPage(p: string | number) {
                    return res.req.url.replace(
                        `page=${req.query.page}`,
                        `page=${p}`
                    );
                },
                isCurrentPage(p: string | number) {
                    return p == req.query.page;
                },
            },
            mealTypes: mealTypes,
            meals: paggedMeals,
            noImage: icons.noImage,
            pages: pages,
        });
    }

    private async resultId(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const meal = await this.db.getWithId(id);

        // Map selected ingredients
        let ings: Ingredient[] = [];
        meal?.ingredients.forEach((ing: String): void => {
            ings.push(
                ingredients[ing.replace("-", "_") as keyof typeof ingredients]
            );
        });

        res.render("result", {
            prefixPath: "../",
            elements: elements.resultId,
            isNotMain: res.req.url !== "/",
            meal: meal,
            ingredients: ings,
            sourceUrl: `/search?${res.req.url.split("?")[1] ?? ""}`,
            noImage: icons.noImage,
        });
    }

    private mealsAdd(req: Request, res: Response): void {
        const mealTypesValues = Object.values(Type);
        const mealTypes = Object.keys(Type).map((k: string, id: number) => {
            const val = mealTypesValues[id];
            const v = val.charAt(0).toUpperCase() + val.toLowerCase().slice(1);
            return { k, v };
        });

        res.render("meals-add", {
            prefixPath: "../",
            elements: elements.mealsAdd,
            isNotMain: res.req.url !== "/",
            filter: {
                icons: icons,
                categorized: categorizeIngredients(),
            },
            mealTypes: mealTypes,
            validator: mealValidator,
        });
    }

    private async mealsAddNew(req: Request, res: Response): Promise<void> {
        const meal = new MealModel({
            author: req.body.author ?? "",
            description: req.body.description ?? "",
            ingredients: req.body["ings"],
            posted: new Date().getTime(),
            title: req.body.title ?? "",
            type: req.body.type ?? "",
        });

        if (req.file) {
            meal.image = req.file.path.split("uploads\\")[1];
        }

        // Map selected ingredients
        let ings: Ingredient[] = [];
        meal.ingredients.forEach((ing: String): void => {
            ings.push(
                ingredients[ing.replace("-", "_") as keyof typeof ingredients]
            );
        });

        try {
            const newMeal = await meal.save();
            res.status(201).render("meals-add-new", {
                prefixPath: "../",
                elements: elements.mealsAddNew,
                isNotMain: res.req.url !== "/",
                meal: newMeal,
                mealType: Type[newMeal.type as keyof typeof Type],
                ingredients: ings,
                noImage: icons.noImage,
            });
        } catch (err: any) {
            const messages = Object.entries(err.errors).map((error: any) => {
                return error[1].message;
            });

            res.status(400).render("meals-add-new-error", {
                prefixPath: "../",
                elements: elements.mealsAddNewError,
                isNotMain: res.req.url !== "/",
                messages: messages,
            });
        }
    }

    private async getMeal(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> {
        let meal = null;

        try {
            meal = await MealModel.findOne({ title: req.body.title });
            if (meal) {
                return res.status(400).render("meals-add-new-error", {
                    prefixPath: "../",
                    elements: elements.mealsAddNewError,
                    isNotMain: res.req.url !== "/",
                    messages: ["Istnieje już posiłek o takiej nazwie!"],
                });
            }
        } catch (err: any) {
            return res.status(500).send({ message: err.message });
        }

        req.body.meal = meal;
        next();
    }

    private mealsAddNewError(
        err: any,
        req: Request,
        res: Response,
        next: NextFunction
    ): any {
        if (err instanceof multer.MulterError) {
            let message = null;

            switch (err.code) {
                case "LIMIT_FILE_SIZE":
                    message = "Plik jest zbyt duży";
                    break;
                case "LIMIT_UNEXPECTED_FILE":
                    message = "Plik musi być obrazkiem";
                    break;
            }

            return res.status(400).render("meals-add-new-error", {
                prefixPath: "../",
                elements: elements.mealsAddNewError,
                isNotMain: res.req.url !== "/",
                messages: [message],
            });
        }

        next();
    }

    private error404(req: Request, res: Response): void {
        res.status(404);
        res.render("404");
    }

    private error500(err: any, res: Response): void {
        res.status(500);
        res.render("500");
        console.error(err.message);
    }
}

export default YummyRouter;
