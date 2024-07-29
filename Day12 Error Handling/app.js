// Day 12: Error Handling

// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch

// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwErrorExample() {
    // This function intentionally throws an error
    throw new Error("This is an intentional error");
}
function handleThrowError() {
    try {
        throwErrorExample();
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}
handleThrowError();

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return numerator / denominator;
}
function handleDivision(numerator, denominator) {
    try {
        let result = divideNumbers(numerator, denominator);
        console.log("Result: " + result);
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}

// Test the function
handleDivision(10, 2); // Should log: Result: 5
handleDivision(10, 0); // Should log: An error occurred: Denominator cannot be zero

// Activity 2: Finally Block

// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function exampleFunction() {
    try {
        console.log("Inside try block");
        // Intentionally throwing an error
        throw new Error("This is an intentional error");
        console.log("This message will not be logged because an error occurred");
    } catch (error) {
        console.log("Inside catch block");
        console.log("An error occurred: " + error.message);
    } finally {
        console.log("Inside finally block");
        console.log("This block executes regardless of an error");
    }
}
exampleFunction();

// Activity 3: Custom Error Objects

// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// Define a custom error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor with the error message
        this.name = "CustomError"; // Set the error name
    }
}

// Function that throws a custom error
function functionThatThrows() {
    throw new CustomError("This is a custom error message");
}

// Function to handle the custom error
function handleCustomError() {
    try {
        functionThatThrows();
    } catch (error) {
        if (error instanceof CustomError) {
            console.log("Caught a CustomError: " + error.message);
        } else {
            console.log("Caught an unknown error: " + error.message);
        }
    }
}

// Test the function
handleCustomError();


// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. Activity 4: Error Handling in Promises

// Custom Error Class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Function to validate user input
function validateInput(input) {
    if (!input.trim()) {
        throw new ValidationError("Input cannot be empty.");
    }
}

// Function to simulate an asynchronous operation with a Promise
function asyncValidateInput(input) {
    return new Promise((resolve, reject) => {
        try {
            validateInput(input);
            resolve("Valid input: " + input);
        } catch (error) {
            reject(error);
        }
    });
}

// Testing the function with a try-catch block
async function testValidation(input) {
    try {
        const result = await asyncValidateInput(input);
        console.log(result);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation Error: " + error.message);
        } else {
            console.error("Unexpected Error: " + error.message);
        }
    }
}

// Example usage
testValidation(""); // This will throw a ValidationError
testValidation("  "); // This will also throw a ValidationError
testValidation("Valid Input"); // This should pass validation

// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

// Function to create a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    });
}

// Using the promise and handling rejection with .catch()
randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. 

// Function to create a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    });
}

// Async function to handle the promise using try-catch
async function handleRandomPromise() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error("Error: " + error);
    }
}

// Example usage
handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// Function to fetch data from an invalid URL
function fetchData() {
    let invalidurl = "https://invalidurl.com/api/data"
    fetch(invalidurl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Data:", data);
        })
        .catch(error => {
            console.error("Fetch Error:", error.message);
        });
}

// Example usage
fetchData();

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

// Async function to fetch data from an invalid URL and handle errors
async function fetchData() {
    const invalidUrl = "https://invalidurl.com/api/data";

    try {
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
}

// Example usage
fetchData();

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
// Achievement:
// By the end of these activities, students will:
// • Understand and implement basic error handling using try-catch blocks.
// • Use finally blocks to execute code regardless of the try-catch outcome.
// • Create and use custom error classes.
// • Handle errors in promises using .catch() and within async functions using try-catch.
// • Implement graceful error handling when making network requests with the fetch API.