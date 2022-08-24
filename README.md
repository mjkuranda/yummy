# yummy

Website that will help you to find somewhat to eat!

## About

Have you ever encountered a situation when you didn't know what to cook?
Yummy will help you to make the best decision!

## Using

Being in the main page (locally is `http://localhost:3000/`) you can see panel, containg the three following buttons:

-   `Wyszukaj po produktach` - redirects to `/search` and move to the ingredients.
-   `Propozycja na dziś` - returns the best option for you at the time (currently disabled option)
-   `Wyszukaj z bazy` - redirects to `/search`

The subpage `/search` allows you finding the best results. You can select multiple ingredients and a type of looking for a meal/meals. Below these filters, `/search` renders the results.

When you hover on a result, it magnifies. You can see title, description and an image of such meal.

When you click on a result, it redirects to `/result` subpage, where you can see the full description of the meal and its all ingredients.

There is one more button on the bottom `/search` subpage. The `Dodaj` button allows you adding a new meal. It redirects to `/meals/add`.

Being in `/meals/add`, you can see a form, containing the following fields:

-   `Nazwa posiłku`
-   `Opis posiłku`
-   `Rodzaj posiłku`
-   `Imię autora wprowadzającego posiłek`
-   `Składniki`

There are required. You can optionally add an image for a new meal.
Additionally, `Nazwa posiłku` is unique i.e. there is no any meal with that name in the database.

<br />

# Yummy for developers

This section contains information about adding the new stuff.

## Adding a new icon

1. Download a new icon image and attach to the appropriate directory, locating in `/icons`.
2. Open `YummyData.ts` and add a new property to `icons` object, naming it according to `camelCase` convention.
3. For the object being created set following properties: `name`, `url` (starting in `/icons`), `ext` (abbr. extension) and `link` (i.e. `source`)

## Adding the new property for `icons` object

The below example creates a new icon located in directory `/icons/default/new-icon.jpg`.
<br />

```javascript
newIcon: new Icon(
    "new icon",
    "/default",
    "jpg",
    "https://cool-icons.com/new-icon-source"
),
```

## Adding a new ingredient

1. Open `YummyData.ts` and find `ingredients` object.
2. Add a new property using `camelCase` convention.
3. Assign an object of ingredient to the new property.

```javascript
newIngredient: new Ingredient(
    Category.SOME_CATEGORY, // Category
    icons.newIcon, // Icon object
    "nowy składnik" // Name
),
```

where `Category` has enum type and `icons` is the object plenty of icons in the same file as `ingredients`.
