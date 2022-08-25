# Ideas

## Missing features

-   Edition of existing meals - you can edit anything you want apart from the title - because it occurs as the name.
-   Add responsive web design for the other subsites. (v2.11.0?)

## Bugs

-   Client validation for an existing meal in the database
-   (vNaN): NaN

## Added

v2.8.0:

-   Validation - client side: The patterns should be loaded from pattern file? Or simply embedeed inside elements.
-   Better handling MongoDB errors - types of errors and their communicates.
-   Error page for multer and other errors while you are trying to add a new meal.

v2.9.0

-   Each result has a property called `relevance` - could be measured as a percentage. The found results should be sorted according to the this property.

v2.10.0

-   Add pagination for results.

## Changed

v2.7.0:

-   6 meals in `/search` should be removed in a near future.
-   Improved README (guide for the customers and the developers - how to add ingredients and other stuff.

## Fixed

v2.6.3:

-   When you try to add a new meal and its image is too large, then you receive a message about failure but the meal wil be added.
