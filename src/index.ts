import { MongoDB } from "../databases/MongoDB";
import { YummyApp } from "./YummyApp";

const run = async (): Promise<void> => {
    const db = new MongoDB();
    await db.init();
    const app = new YummyApp(db);
};

/* Main of this application. It runs the entire application. */
run();

// TODO: Nie pozwolić by dodawano pusty meal - nie robi się o sprawdzić, czy nie ma błędu
// TODO: /meals/add - Wróć do wyszukiwania -> Wróć do strony głównej

// TODO: Po odświeżeniu /meals/new walidacja czy nie ma takiego posiłku już w bazie
