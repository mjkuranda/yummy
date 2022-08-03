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
        this.app.use(express.static(__dirname + "\\..\\..\\public\\"));

        // Init router
        this.router = new YummyRouter(this.db);
        this.app.get("/dev", this.router.dev.bind(this.router));
        this.app.get("/", this.router.main.bind(this.router));
        this.app.get("/search", this.router.search.bind(this.router));
        this.app.get("/result", this.router.result.bind(this.router));
        this.app.use(this.router.error404.bind(this.router));
        this.app.use(this.router.error500.bind(this.router));

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
