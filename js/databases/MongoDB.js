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
exports.MongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MealModel_1 = require("../databases/models/MealModel");
class MongoDB {
    constructor() {
        this.isConnected = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.connect("mongodb://localhost:27017/yummy");
            const db = mongoose_1.default.connection;
            db.on("error", () => console.error("MongoDB Connection error"));
            db.once("open", () => {
                console.log("Connected to the MongoDB!");
                this.isConnected = true;
            });
            console.log("MongoDB instance has been initialized");
        });
    }
    isInitialized() {
        return this.isConnected;
    }
    get(ings) {
        return __awaiter(this, void 0, void 0, function* () {
            const meals = (yield MealModel_1.MealModel.find({
                ingredients: { $in: ings },
            }));
            return meals;
        });
    }
}
exports.MongoDB = MongoDB;
