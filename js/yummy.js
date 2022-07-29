"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import handlebars from "handlebars";
// import expressHandlebars from "express-handlebars";
// import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
const searchHandler_1 = require("./handlers/searchHandler");
const app = (0, express_1.default)();
// const hbs = expressHandlebars.engine({
//     defaultLayout: "main",
//     layoutsDir: "views/layouts/",
//     handlebars: allowInsecurePrototypeAccess(handlebars),
//     helpers: {
//         calc(value: number) {
//             return value * 5;
//         },
//     },
// });
const port = process.env.PORT || 3000;
const fortunes = [
    "Pokonaj swoje lęki, albo one pokonają ciebie.",
    "Rzeki potrzebują źródeł.",
    "Nie obawiaj się nieznanego.",
    "Oczekuj przyjemnej niespodzianki.",
    "Zawsze szukaj prostego rozwiązania.",
];
// BodyParser
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Handlebars views
// app.engine("handlebars", hbs);
app.set("view engine", "handlebars");
app.set("views", "./views/layouts");
app.use(express_1.default.static(__dirname + "/public"));
app.get("/db", (req, res) => {
    res.send(`${req.query.x}`);
});
// Tracing
app.get("/", (req, res) => {
    res.render("index", {
        elements: data_1.elements.main,
        isNotMain: res.req.url !== "/",
    });
});
app.get("/search", (req, res) => {
    const queryStr = typeof req.query.ings;
    let checkedIngs = (0, searchHandler_1.checkedIngredients)(undefined);
    console.log(queryStr);
    res.render("search", {
        elements: data_1.elements.search,
        isNotMain: res.req.url !== "/",
        filter: {
            icons: data_1.icons,
            categorized: (0, searchHandler_1.categorizeIngredients)(),
        },
        helpers: {
            checkIng(id) {
                // If nothing is checked
                if (checkedIngs == null)
                    return false;
                // Otherwise...
                return checkedIngs[id];
            },
            /*
                Check keyword 'checked' if a ingredient has true
                - that means - is checked
            */
            checkIfChecked(checked) {
                return checked ? "checked" : "";
            },
        },
    });
});
app.post("/search", (req, res) => { });
app.get("/result", (req, res) => {
    res.render("result", {
        elements: data_1.elements.result,
        isNotMain: res.req.url !== "/",
    });
});
app.get("/about", (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("about", { fortune: randomFortune });
});
// Error 500
app.use((err, req, res, next) => {
    res.status(500);
    res.render("500");
    console.error(err.message);
});
// Error 404
app.use((req, res) => {
    res.status(404);
    res.render("404");
});
app.listen(port, () => console.log(`Express has been run at the address:
        http://localhost:${port};
        Press Ctrl-C to terminate it.`));
