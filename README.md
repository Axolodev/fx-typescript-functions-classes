# TV Show Tracker

## Description:
Create a TypeScript application for Smart TVs that helps users track their favorite TV shows. The application will allow users to add, remove, and view details of the TV shows they follow, as well as filter shows based on genre and search for specific shows. Use TypeScript features like type annotations, interfaces, and enums to enhance code readability and maintainability.

## Requirements for Generics and Utilities


### Sorting the TV Shows
- Implement a "compare" function using generics that accepts two objects of the same type and a property key to compare. The key property should only allow elements that exist within the object. The function should return -1, 0, or 1 depending on whether the first object's property is less than, equal to, or greater than the second object's property, respectively. 

- Update the "displayShows" function to accept an optional sorting option. This option should be an object with two properties: "key" (a string representing the property key) and "order" (either "asc" or "desc" for ascending or descending order). Use the generic "compare" function to sort the list of TV shows based on the sorting option.

- Create a utility called "ValidSortingKey" that validates the sorting key used in both functions. This utility should ensure that the sorting key provided is a valid property of the TVShow class and that it's appropriate for sorting purposes.

- Add elements to your User Interface to allow sorting the TV Shows

### Updating TV Shows

- Implement a flexible update function that allows users to partially update specific details of a TV show, such as its title, genre, rating, status, or airing date. You can use a [predefined TypeScript utility](https://www.typescriptlang.org/docs/handbook/utility-types.html) or create your own.

- Create a utility called "AllowedUpdates" that specifies which properties of the TVShow class can be updated by the user. This utility should help prevent unauthorized changes to certain properties the user cannot edit.

- Extend the user interface to include an "Edit Show" option, allowing users to update the details of TV shows in their list.



--- 

## Requirements for Functions and Classes:

Your code should follow Fx's Coding standards and include unit tests for the features that are mentioned here.

1. Create a "TVShow" class with properties like "title", "genre", "rating", "status" (e.g., ongoing, completed, or canceled), and "airingDate". Include a constructor to initialize these properties and methods to get and set their values. Use primitive data types, such as strings, numbers, and booleans, to represent the properties of the TVShow class. Use arrays to store a list of genres and status options.
2. Implement a "loadShows" function that loads a series of "TVShow" objects from the JSON file included in the project.
3. Implement an "addShow" function to add a new TV show to an array of "TVShow" objects. Overload this function to allow users to add shows by providing either an object of the TVShow class or individual properties.
4. Implement a "removeShow" function that takes the title of a TV show as an argument and removes it from the array of TVShow objects.
5. Create a "renderShows" function that displays the list of TV shows in a user-friendly format on the screen.
6. Implement a "filterByGenre" function that takes a genre as an argument and returns an array of TVShow objects that belong to the specified genre.
7. Add a "searchShows" function that allows users to search for a specific TV show by title, genre, or status. This function should return an array of matching TVShow objects.
8. Implement a simple user interface that allows users to interact with the application. Include options for adding and removing shows, displaying the list of shows, filtering by genre, and searching for shows.
9. Add error handling to ensure that users cannot add duplicate shows, remove non-existent shows, or search for invalid genres or statuses.

