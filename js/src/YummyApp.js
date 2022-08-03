"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YummyApp = void 0;
const express_1 = __importDefault(require("express"));
const handlebars_1 = __importDefault(require("handlebars"));
const express_handlebars_1 = require("express-handlebars");
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access");
const body_parser_1 = __importDefault(require("body-parser"));
const YummyRouter_1 = require("./YummyRouter");
class YummyApp {
    constructor(db) {
        this.db = db;
        this.app = (0, express_1.default)();
        this.hbs = (0, express_handlebars_1.engine)({
            defaultLayout: "main",
            layoutsDir: "views/layouts/",
            handlebars: (0, allow_prototype_access_1.allowInsecurePrototypeAccess)(handlebars_1.default),
            helpers: {},
        });
        // BodyParser
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        // Handlebars views
        this.app.engine("handlebars", this.hbs);
        this.app.set("view engine", "handlebars");
        this.app.set("views", "./views/layouts");
        this.app.use(express_1.default.static(__dirname + "\\..\\..\\public\\"));
        // Init router
        this.router = new YummyRouter_1.YummyRouter(this.db);
        this.app.get("/dev", this.router.dev.bind(this.router));
        this.app.get("/", this.router.main.bind(this.router));
        this.app.get("/search", this.router.search.bind(this.router));
        this.app.get("/result", this.router.result.bind(this.router));
        this.app.use(this.router.error404.bind(this.router));
        this.app.use(this.router.error500.bind(this.router));
        // Run the app
        this.port = process.env.PORT || 3000;
        this.app.listen(this.port, () => console.log(`Express has been run at the address:
        http://localhost:${this.port};
        Press Ctrl-C to terminate it.`));
    }
}
exports.YummyApp = YummyApp;
