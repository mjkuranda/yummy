import { MongoDB } from "../databases/MongoDB";
import { YummyApp } from "./YummyApp";

const run = async (): Promise<void> => {
    const db = new MongoDB();
    await db.init();
    const app = new YummyApp(db);
};

/* Main of this application. It runs the entire application. */
run();
