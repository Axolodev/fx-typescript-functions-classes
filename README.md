# TV Show Tracker Aanandita/Giorgio

## Description:
Create a TypeScript application for Smart TVs that helps users track their favorite TV shows. The application will allow users to add, remove, and view details of the TV shows they follow, as well as filter shows based on genre and search for specific shows. Use TypeScript features like type annotations, interfaces, and enums to enhance code readability and maintainability.

## Requirements:

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

