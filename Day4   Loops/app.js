// Day 4: Loops.

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

// Achievement:
// By the end of these activities, students will:
// • Understand and use for loops to iterate over a sequence of numbers.
// • Utilize while loops for iteration based on a condition.
// • Apply do...while loops to ensure the loop body is executed at least once.
// • Implement nested loops to solve more complex problems.
// • Use loop control statements (break and continue) to control the flow of loops.

// Tasks/Activities:

// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(`${5} x ${i} = ${i * 5}`);

}

// Activity 2: While Loop
// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let k = 1;
let sum = 0;
while (k <= 10) {
    sum= sum + k;
    k++;
}
console.log("The sum of numbers from 1 to 10 is: " + sum);

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let j = 10;
while (j >= 1) {
    console.log(j,`j`);
    j--;
}

// Activity 3: Do...While Loop
// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let m =1;
do {
    console.log(m,`m`);
    m++;
} while (m<=10);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let n =5;
do {
    console.log(`${n}  ${n*n}`);
n--;
} while (n>=1);

// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:

let rows = 5; // Number of rows for the pattern
let pattern = '';
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i);
}

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; // Exit the loop when i is 7
    }
    console.log(i);}

//================= Complete=================// 