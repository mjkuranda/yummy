//const express = require('express');
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
import handlebars from "handlebars";
import expressHandlebars from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import bodyParser from "body-parser";

//const expressHandlebars = require("express-handlebars");

import { elements, icons } from "./public/out/data.js";
import {
    categorizeIngredients,
    checkedIngredients,
} from "./public/out/handlers/searchHandler.js";

const app = express();

const hbs = expressHandlebars.engine({
    defaultLayout: "main",
    layoutsDir: "views/layouts/",
    handlebars: allowInsecurePrototypeAccess(handlebars),

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars views
app.engine("handlebars", hbs);
app.set("view engine", "handlebars");
app.set("views", "./views/layouts");
app.use(express.static(__dirname + "/public"));

// Tracing
app.get("/", (req, res) => {
    res.render("index", {
        elements: elements.main,
        isNotMain: res.req.url !== "/",
    });
});
app.get("/search", (req, res) => {
    let checkedIngs = checkedIngredients(req.query.ings);
    console.log(req.query.ings);

    res.render("search", {
        elements: elements.search,
        isNotMain: res.req.url !== "/",
        filter: {
            icons: icons,
            categorized: categorizeIngredients(),
        },
        helpers: {
            checkIng(id) {
                // If nothing is checked
                if (checkedIngs == null) return false;
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
app.post("/search", (req, res) => {});
app.get("/result", (req, res) => {
    res.render("result", {
        elements: elements.result,
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

app.listen(port, () =>
    console.log(
        `Express has been run at the address:
        http://localhost:${port};
        Press Ctrl-C to terminate it.`
    )
);
