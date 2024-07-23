// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

// Achievement:
// By the end of these activities, students will:
// • Understand and use template literals for string interpolation and multi-line strings.
// • Apply destructuring to extract values from arrays and objects.
// • Utilize spread and rest operators for array manipulation and function arguments.
// • Define functions with default parameters.
// Create objects using enhanced object literals, including methods and computed property names.

// Tasks/Activities:
// Activity 1: Template Literals

// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const names = "jawad";
const age = 18;
console.log(`Hello, my name is ${names} and I am ${age} years old.`);

// • Task 2: Create a multi-line string using template literals and log it to the console.

const email = `akhterjawad566@gmail.com`;
const password = `••••••••••`;
console.log(`Hello, my email is ${email} & my password is ${password}`);

// Activity 2: Destructuring

// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let fruits = [`watermelon`, `banana`, `mango`, `apple`];
let [first, second] = fruits;
console.log(`${first} ${second}`);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
let { title, author } = book;
console.log(`title==> ${title}, author==> ${author}`);

// Activity 3: Spread and Rest Operators

// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let Main_Fruits = [`banana`, `mango`, `apple`];
let array = [`watermelon`, ...Main_Fruits]
console.log(array);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

let Main_Object = (...username) => {
    console.log(username);
}
Main_Object("abdullah", "usman", "ammar", "zain", "hassan")

// Activity 4: Default Parameters

// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
    return a * b;
}
let result1 = multiply(5, 3);
console.log(`Result with both parameters: ${result1}`);
let result2 = multiply(5);
console.log(`Result with one parameter: ${result2}`);


// Activity 5: Enhanced Object Literals

// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let FirstName = 'haseeb';
let LastName = 'ur rehman';
let value = {
    FirstName,
    LastName
};
console.log(value, `FirstName==> ${FirstName} LastName==> ${LastName}`);


// • Task 9: Create an object with computed property names based on variables and log the object to the console.

const firstName = 'name';
const ageKey = 'age';

// Create an object with computed property names
const person = {
    [firstName]: 'John',
    [ageKey]: 30,
    [' occupation']: 'Developer'
};
console.log(person);

//<|=============== COMPLETE =================|>//