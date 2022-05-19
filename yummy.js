//const express = require('express');
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";
import handlebars from "handlebars";
import expressHandlebars from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";

//const expressHandlebars = require("express-handlebars");

import { elements, icons } from "./public/out/data.js";
import { categorizeIngredients } from "./public/out/render/renderSearch.js";

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
    res.render("search", {
        helpers: {
            //renderSearchIngredients: renderSearchIngredients,
            indexOf: (arr, ind) => {
                return arr[ind];
            },
        },
        elements: elements.search,
        isNotMain: res.req.url !== "/",
        filter: {
            icons: icons,
            categorized: categorizeIngredients(),
        },
    });
});
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
