import { Request, Response } from "express";
import { IDatabase } from "../databases/IDatabase";
import { elements, icons } from "./data";

import { categorizeIngredients } from "./handlers/searchHandler";

export class YummyRouter {
    constructor(private readonly db: IDatabase) {}

    public dev(req: Request, res: Response): void {
        console.log("test dev func");
        res.send("Test dev func");
    }

    public main(req: Request, res: Response): void {
        res.render("index", {
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
        res.render("mealsAdd", {
            prefixPath: "../",
            elements: elements.mealsAdd,
        });
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
