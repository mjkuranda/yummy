"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlebars_1 = __importDefault(require("handlebars"));
const express_handlebars_1 = require("express-handlebars");
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access");
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
const searchHandler_1 = require("./handlers/searchHandler");
const db_1 = require("./db");
const app = (0, express_1.default)();
const hbs = (0, express_handlebars_1.engine)({
    defaultLayout: "main",
    layoutsDir: "views/layouts/",
    handlebars: (0, allow_prototype_access_1.allowInsecurePrototypeAccess)(handlebars_1.default),
    helpers: {
        calc(value) {
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
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Handlebars views
app.engine("handlebars", hbs);
app.set("view engine", "handlebars");
app.set("views", "./views/layouts");
app.use(express_1.default.static(__dirname + "\\..\\public"));
app.get("/db", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const meals = yield Promise.resolve((0, db_1.getMeals)());
    res.send(meals);
}));
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
