// Day 3: Control Structures

// Tasks/Activities:

//  Feature Request:

// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:
// • Implement and understand basic if-else control flow.
// • Use nested if-else statements to handle multiple conditions.
// • Utilize switch cases for control flow based on specific values. Apply the ternary operator for concise condition checking.
// • Combine multiple conditions to solve more complex problems.

// Activity 1: If-Else Statements

// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive.`);
  } else if (num < 0) {
    console.log(`${num} is negative.`);
  } else {
    console.log(`${num} is zero.`);
  }
}

// Example usage:
checkNumber(5);    // Output: 5 is positive.
checkNumber(-3);   // Output: -3 is negative.
checkNumber(0);    // Output: 0 is zero.

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 19
if (age >= 18) {
  console.log(`eligible`);
}

// Activity 2: Nested If-Else Statements

// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 5
let num2 = 6
let num3 = 7
if (num1 < num3) {
  if (num2 > num3) {
    console.log(`${num1} is large no`);
  } else {
    console.log(`${num3} is large no`);
  }
} else {
  console.log(`${num2} is large no`);
}

// Activity 3: Switch Case

// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = new Date().getDay();
switch (day) {
  case 0: console.log(`monady`);

    break;
  case 1: console.log(`Tuesday`);

    break;
  case 2: console.log(`Wedneday`);

    break;
  case 3: console.log(`Thursday`);

    break;
  case 4: console.log(`Friday`);

    break;
  case 5: console.log(`Saturday`);

    break;
  case 6: console.log(`Sunday`);

    break;
  default: console.log(`Enter a valid Day`);
    break;
}

// • Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 95
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log(`your score is ${score} & your grade is ${grade}`);

// Activity 4: Conditional (Ternary) Operator

// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.



// Activity 5: Combining Conditions

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.


