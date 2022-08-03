import express, { Express, NextFunction, Request, Response } from "express";
import handlebars from "handlebars";
import { engine } from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import bodyParser from "body-parser";
import { YummyRouter } from "./YummyRouter";

export class YummyApp {
    private app: Express;
    private hbs: any;
    private port: string | number;
    private router: YummyRouter;

    constructor() {
        this.app = express();
        this.hbs = engine({
            defaultLayout: "main",
            layoutsDir: "views/layouts/",
            handlebars: allowInsecurePrototypeAccess(handlebars),

            helpers: {},
        });

        // BodyParser
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        // Handlebars views
        this.app.engine("handlebars", this.hbs);
        this.app.set("view engine", "handlebars");
        this.app.set("views", "./views/layouts");
        this.app.use(express.static(__dirname + "\\..\\public"));

        // Init router
        this.router = new YummyRouter();
        this.app.use("/db", this.router.db.bind(this.router));
        // Implement other routes

        // Run the app
        this.port = process.env.PORT || 3000;

        this.app.listen(this.port, () =>
            console.log(
                `Express has been run at the address:
        http://localhost:${port};
        Press Ctrl-C to terminate it.`
            )
        );
    }
}
