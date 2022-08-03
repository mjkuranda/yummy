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
Object.defineProperty(exports, "__esModule", { value: true });
exports.YummyRouter = void 0;
const data_1 = require("./data");
const searchHandler_1 = require("./handlers/searchHandler");
class YummyRouter {
    constructor(db) {
        this.db = db;
    }
    dev(req, res) {
        console.log("test dev func");
        res.send("Test dev func");
    }
    main(req, res) {
        res.render("index", {
            elements: data_1.elements.main,
            isNotMain: res.req.url !== "/",
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ings = req.query.ings;
            const meals = yield this.db.get(ings);
            res.render("search", {
                elements: data_1.elements.search,
                isNotMain: res.req.url !== "/",
                filter: {
                    icons: data_1.icons,
                    categorized: (0, searchHandler_1.categorizeIngredients)(),
                },
                helpers: {
                    tryToCheck(ingredientKey) {
                        return (ings === null || ings === void 0 ? void 0 : ings.includes(ingredientKey)) ? "checked" : "";
                    },
                },
            });
        });
    }
    result(req, res) {
        res.render("result", {
            elements: data_1.elements.result,
            isNotMain: res.req.url !== "/",
        });
    }
    error404(req, res) {
        res.status(404);
        res.render("404");
    }
    error500(err, res) {
        res.status(500);
        res.render("500");
        console.error(err.message);
    }
}
exports.YummyRouter = YummyRouter;
