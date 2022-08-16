import express, { Express } from "express";
import handlebars from "handlebars";
import { engine } from "express-handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import bodyParser from "body-parser";
import { YummyRouter } from "./YummyRouter";
import { IDatabase } from "../databases/IDatabase";

export class YummyApp {
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

        // BodyParser
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        // Handlebars views
        this.app.engine("handlebars", this.hbs);
        this.app.set("view engine", "handlebars");
        this.app.set("views", "./views/layouts");
        this.app.use(express.static(__dirname + "\\..\\..\\public\\"));

        // Init router
        this.router = new YummyRouter(this.app, this.db);
        this.app.use(this.router.getRouter());

        // Run the app
        this.port = process.env.PORT || 3000;
        this.app.listen(this.port, () =>
            console.log(
                `Express has been run at the address:
        http://localhost:${this.port};
        Press Ctrl-C to terminate it.`
            )
        );
    }
}
