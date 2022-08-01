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
exports.x = exports.getMeals = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MealModel_1 = require("./models/MealModel");
// mongoose
//     .connect("mongodb://localhost:27017/yummy")
//     .then(() => console.log("Connected to database!"))
//     .catch((error) => console.error(error));
mongoose_1.default.connect("mongodb://localhost:27017/yummy");
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "MongoDB Connection error")).once("open", () => console.log("Connected to the db!"));
const getMeals = () => __awaiter(void 0, void 0, void 0, function* () {
    const meals = yield MealModel_1.MealModel.find();
    return meals;
});
exports.getMeals = getMeals;
exports.x = 5;
// export const db = mongoose.connection;
