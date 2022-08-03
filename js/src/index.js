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
const MongoDB_1 = require("../databases/MongoDB");
const YummyApp_1 = require("./YummyApp");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = new MongoDB_1.MongoDB();
    yield db.init();
    const app = new YummyApp_1.YummyApp(db);
});
/* Main of this application. It runs the entire application. */
run();
