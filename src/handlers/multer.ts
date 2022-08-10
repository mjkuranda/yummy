// Imports and type aliases
import { Request } from "express";
import multer, { FileFilterCallback, StorageEngine } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

// For storage
export const fileStorage: StorageEngine = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, "./public/uploads/");
    },

    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: FileNameCallback
    ): void => {
        const timestamp = new Date().getTime();
        const orgName = file.originalname.split(".")[0];
        const ext = file.mimetype.split("/")[1];

        // timestamp-originalname[0].mimetype[1]
        const name = `${timestamp}-${orgName}.${ext}`;
        callback(null, name);
    },
});

// For file filter
export const fileFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        callback(null, true);
    } else {
        callback(null, false);
    }
};
