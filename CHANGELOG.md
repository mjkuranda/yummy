# Yummy Changelog

## [2.2.1] - 2022-08-10

### Added

-   [mjkuranda]: Do not add existing meals

### Bugfix

-   Add new meal only if does not exist
-   Handle error that occurs when the file is too large
-   Handle MongoDB schema errors
-   Render correctly added meal image
-   Change text link into "Powrót do strony głównej" in "/meals/add" for GET

## [2.2.0] - 2022-08-10

### Added

-   [mjkuranda]: Add images to the meals

### Feature

-   Adds opportunity adding images with new meal
-   Handles limits error multer

### Bugfix

-   Fetch correctly selected ingredients of new meal
-   Render all ingredients icon
-   Validation after serverside for new meal

## [2.1.0] - 2022-08-05

### Added

-   [mjkuranda]: Add new meals

### Feature

-   Adds /meals/new subpage
-   Allows to add new meal in /meals/add subpage
-   Adds subpage that displays message about adding new meal

## [2.0.0] - 2022-08-03

### Added

-   [mjkuranda]: Working TypeScript + Express + MongoDB (basis) project

## [1.0.0] - 2022-02-22

### Added

-   [mjkuranda]: Initial version
