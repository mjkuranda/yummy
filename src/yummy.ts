import express, { Express, NextFunction, Request, Response } from "express";
import handlebars from "handlebars";
import { engine } from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import bodyParser from "body-parser";

import { elements, icons } from "./data";
import {
    categorizeIngredients,
    checkedIngredients,
} from "./handlers/searchHandler";
import { getMeals } from "./db";

const app: Express = express();

const hbs = engine({
    defaultLayout: "main",
    layoutsDir: "views/layouts/",
    handlebars: allowInsecurePrototypeAccess(handlebars),

    helpers: {
        calc(value: number) {
            return value * 5;
        },
    },
});

const port = process.env.PORT || 3000;

const fortunes = [
    "Pokonaj swoje lęki, albo one pokonają ciebie.",
    "Rzeki potrzebują źródeł.",
    "Nie obawiaj się nieznanego.",
    "Oczekuj przyjemnej niespodzianki.",
    "Zawsze szukaj prostego rozwiązania.",
];

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars views
app.engine("handlebars", hbs);
app.set("view engine", "handlebars");
app.set("views", "./views/layouts");
app.use(express.static(__dirname + "\\..\\public"));

app.get("/db", async (req: Request, res: Response) => {
    const meals = await Promise.resolve(getMeals());
    res.send(meals);
});

// Tracing
app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        elements: elements.main,
        isNotMain: res.req.url !== "/",
    });
});
app.get("/search", (req: Request, res: Response) => {
    const query = req.query.ings as string[];
    let checkedIngs = checkedIngredients(query);

    res.render("search", {
        elements: elements.search,
        isNotMain: res.req.url !== "/",
        filter: {
            icons: icons,
            categorized: categorizeIngredients(),
        },
        helpers: {
            tryToCheck(ingredientKey: string) {
                return query.includes(ingredientKey) ? "checked" : "";
            },
        },
    });
});
app.post("/search", (req: Request, res: Response) => {});
app.get("/result", (req: Request, res: Response) => {
    res.render("result", {
        elements: elements.result,
        isNotMain: res.req.url !== "/",
    });
});
app.get("/about", (req: Request, res: Response) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", { fortune: randomFortune });
});

// Error 500
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    res.render("500");
    console.error(err.message);
});

// Error 404
app.use((req: Request, res: Response) => {
    res.status(404);
    res.render("404");
});

app.listen(port, () =>
    console.log(
        `Express has been run at the address:
        http://localhost:${port};
        Press Ctrl-C to terminate it.`
    )
);
