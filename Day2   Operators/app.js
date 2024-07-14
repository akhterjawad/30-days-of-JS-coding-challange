// Day 2: Operators Tasks/Activities:

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results. 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Achievement:
// By the end of these activities, students will:
// • Understand and use arithmetic operators to perform basic calculations.
// • Use assignment operators to modify variable values.
// • Compare values using comparison operators.
// • Combine conditions using logical operators.
// • Use the ternary operator for concise conditional expressions.

// Activity 1: Arithmetic Operations

// • Task 1: Write a program to add two numbers and log the result to the console.log

let number_1 = 4;
let number_2 = 6;
let add = number_1 + number_2;
console.log(add);

// • Task 2: Write a program to subtract two numbers and log the result to the console.log

let number_3 = 4;
let number_4 = 6;
let subract = number_3 + number_4;
console.log(subract);

// • Task 3: Write a program to multiply two numbers and log the result to the console.log

let number_5 = 4;
let number_6 = 2;
let multiply = number_5 * number_6;
console.log(multiply);

// • Task 4: Write a program to divide two numbers and log the result to the console.log

let number_7 = 8;
let number_8 = 3;
let divide = number_7 / number_8;
console.log(divide);

// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.log

let number_9 = 5;
let number_10 = 9;
let remainder = number_9 % number_10;
console.log(remainder);

// Activity 2: Assignment Operators

// • Task 6: Use the += operator to add a number to a variable and log the result to the console.log

let number_11 = 10;
let addValue = 5;
number_11 += addValue;
console.log(number_11);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.log

let number_12 = 90;
let SubractValue = 84;
number_12 -= SubractValue;
console.log(number_12);

// Activity 3: Comparison Operators

// • Task 8: Write a program to compare two numbers using > and < and log the result to the console.log

let number_13 = 9;
let number_14 = 9;
let isGreater = number_13 > number_14;
let isLesser = number_13 < number_14;
console.log(`Greater value is ${isGreater} & Lesser value is ${isLesser}`);


// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.log Task 10: Write a program to compare two numbers using == and === and log the result to the console.log

let number_15 = 30;
let number_16 = 30;
let isGreaterOrEqual = number_15 >= number_16;
console.log(isGreaterOrEqual);
let isLesserOrEqual = number_15 <= number_16;
console.log(isLesserOrEqual);

// Activity 4: Logical Operators

// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.log

let EndOperator = 4 < 5 && 3 > 6;
console.log(EndOperator);
console.log(EndOperator && OROperator);

// • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.log

let OROperator = 4 < 5 || 3 > 6;
console.log(OROperator);
console.log(EndOperator || OROperator);

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.log

let number_17 = !(4 > 5);
console.log(number_17);

// Activity 5: Ternary Operator

// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.log

let number_18 = -5;
let result = (number_18 >= 0) ? "positive" : "negative";
console.log("The number " + number_18 + " is " + result + ".");