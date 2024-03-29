import express, { Express } from "express";
import handlebars from "handlebars";
import dotenv from "dotenv";
import path from "path";
import { engine } from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import bodyParser from "body-parser";
import YummyRouter from "./YummyRouter";
import { IDatabase } from "../databases/IDatabase";

class YummyApp {
    private app: Express;
    private hbs: any;
    private port: string | number;
    private router: YummyRouter;

    constructor(private readonly db: IDatabase) {
        this.app = express();
        this.hbs = engine({
            defaultLayout: "index",
            layoutsDir: "views/layouts/",
            handlebars: allowInsecurePrototypeAccess(handlebars),

            helpers: {
                insertPath(path: string) {
                    return path;
                },
            },
        });
        dotenv.config();

        // BodyParser
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        // Handlebars views
        this.app.engine("handlebars", this.hbs);
        this.app.set("view engine", "handlebars");
        this.app.set("views", "./views/layouts");
        if (process.env.DEPLOY) {
            this.app.use(
                express.static(path.join(__dirname, "/../../public/"))
            );
            console.log(`Static files served from: ${__dirname}/../../public/`);
        } else {
            this.app.use(
                express.static(path.join(__dirname, "\\..\\..\\public\\"))
            );
            console.log(
                `Static files served from: ${__dirname}\\..\\..\\public\\`
            );
        }

        // Init router
        this.router = new YummyRouter(this.app, this.db);
        this.app.use(this.router.getRouter());

        // Run the app
        this.port = process.env.PORT || 3000;
        this.app.listen(this.port, () =>
            console.log(
                `Express has been run at the address:
        ${process.env.PROTOCOL}://${process.env.HOSTNAME}:${this.port};
        Press Ctrl-C to terminate it.`
            )
        );
    }
}

export default YummyApp;
