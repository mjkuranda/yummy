# Yummy Changelog

## [2.11.3] - 2022-09-07

### Fixed

-   [mjkuranda]: Database interface.

## [2.11.2] - 2022-09-07

### Fixed

-   [mjkuranda]: Type filter.

## [2.11.1] - 2022-09-06

### Fixed

-   [mjkuranda]: Responsive web design for mobile users.

## [2.11.0] - 2022-09-03

-   [mjkuranda]: Added better responsive web design for mobile users.

### Added

-   Responsive web design for each subsites using mobile devices.

## [2.10.1] - 2022-08-27

-   [mjkuranda]: Handling dotenv package.

### Changed

-   Application port, hostname, database credentials are loaded from `.env` file.
-   Deploy on HerokuApp.com - working app.

## [2.10.0] - 2022-08-25

-   [mjkuranda]: Paging meal results.

### Added

-   Added paging meal results.

## [2.9.0] - 2022-08-25

-   [mjkuranda]: Sorting got results.

### Added

-   Added `relevance` property to each got meal in `/search`.
-   Sorting meals by `relevance` and ingredients amount.
-   Opening a meal result by RMB on result's image.

## [2.8.0] - 2022-08-24

-   [mjkuranda]: Validation server & client side.

### Added

-   Added validation for server side.
-   Added error 400 subpage.
-   Added validation for client side.
-   Handles MongoDB errors.

## [2.7.0] - 2022-08-23

-   [mjkuranda]: Meals without image render no image photo.

### Added

-   New sections in `README.md` file such us: `Using`, `Yummy for developers`.
-   Improved `README.md` file.

### Changed

-   No image photo for meals without image.

## [2.6.3] - 2022-08-16

-   [mjkuranda]: New routing structure

### Changed

-   Action on icons and label text can select/unselect option in `/search`
-   Routes defined in YummyRouter file.

### Added

-   FileSize constants (0.1 MB, 0.5 MB, 1 MB, 10 MB)

## [2.6.2] - 2022-08-16

-   [mjkuranda]: Fix other links

### Fixed

-   Fixs two buttons in `/meals/add` (summary of new meal - post action)

### Changed

-   Top link changes text to `Powrót do wyszukiwania` and refers to `/search?` address.

### Added

-   Adds new button on the bottom of `/search` as `Dodaj`. It refers to `/meals/add` action.

## [2.6.1] - 2022-08-13

-   [mjkuranda]: Fix links in index file

### Fixed

-   Add links for links in index file.
-   Redirects to search subsite containg different queries.

## [2.6.0] - 2022-08-13

-   [mjkuranda]: Navigation between subsites

### Added

-   All buttons redirect to the indicated address
-   Search-Result correct redirecting with source
-   Redirect correctly all links in index

### Fixed

-   Center text inside button
-   Disable `Propozycja na dziś` button

## [2.5.0] - 2022-08-13

-   [mjkuranda]: Render selected result

### Added

-   Render result with details on route /result/:id

### Changed

-   Text for meals without image

## [2.4.0] - 2022-08-13

-   [mjkuranda]: Search meals

### Added

-   Fetch all matching documents from the database
-   Render them correctly in /search

## [2.3.0] - 2022-08-13

-   [mjkuranda]: Typing Meals

### Added

-   Each meal has assiged its type
-   Adds meal type to schema
-   Render type select options in /meals/add
-   Render all types in /search
-   Sends selected types in query

## [2.2.3] - 2022-08-13

-   [mjkuranda]: Rename all modules starting with big letter

### Changed

-   All classes start with big letter
-   Renames data.ts to YummyData.ts

## [2.2.2] - 2022-08-11

### Changed

-   [mjkuranda]: Print ingredients instead of icons

### Bugfix

-   Fix ingredients name in /meals/add/new
-   Fix space between checkbox and ingredient in /meals/add

## [2.2.1] - 2022-08-10

### Changed

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
