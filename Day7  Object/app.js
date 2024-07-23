// Day 7: Objects

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and object.keys / Object.values.Achievement:

// By the end of these activities, students will:
// • Create and manipulate objects with properties and methods.
// • Understand and use the this keyword in object methods.
// • Work with nested objects and arrays of objects.
// • Iterate over an object's properties using loops and built-in methods.

// Tasks/Activities:

// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getBookInfo: function (year) {
        return `${this.title} by ${this.author} & ${year}`;
    }

};

console.log(book);

// • Task 2: Access and log the title and author properties of the book object.

console.log(book.title, book.author);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

console.log(book.getBookInfo());

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

console.log(book.getBookInfo(2000));

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 

let library = {
    name: "New York Public Library",
    Mainbooks: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ]
};
console.log(library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(`${library.Mainbooks[0].title}     ${library.Mainbooks[1].title}     ${library.Mainbooks[2].title}`);

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

let school = {
    class1: 'junior',
    class2: 'senior',
    head: function () {
        return `${this.class1}  ${this.class2}`
    }
};
console.log(school.head());

// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in book) {
    console.log(key);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

for (const key in book) {
    console.log(book[key]);
}
