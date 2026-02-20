// Questin 1  Even Or odd

let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}

// Qustion 2 Fizz Buzz Game
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Question 3  Reverse Strint
let stringToReverse = prompt("Enter a string to reverse:");
for(let i = stringToReverse.length - 1; i >= 0; i--) {
    console.log(stringToReverse[i]);
}

// Qustion 4 Compute Circle Area and Circumference



// Qustion 5 check two given numbers and return true if one of the number is 50 or if their sum is 50.

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
    console.log("True");
} else {
    console.log("False");
}

// Question 6  check from two given integers, whether one is positive and another one is negative.
    // let int1 = Number(prompt("Enter the first integer:"));
    // let int2 = Number(prompt("Enter the second integer:"));

    // if ((int1 > 0 && int2 < 0) || (int1 < 0 && int2 > 0)) {
    //     console.log("One integer is positive and the other is negative.");
    // } else {
    //     console.log("Both integers are either positive or negative.");
    // }

// Qustion 7  check whether a given positive number is a multiple of 5 or a multiple of 8
let positiveNumber = Number(prompt("Enter a positive number:"));

if (positiveNumber % 5 === 0) {
    console.log(positiveNumber + " is a multiple of 5.");
} else if (positiveNumber % 8 === 0) {
    console.log(positiveNumber + " is a multiple of 8.");
} else {
    console.log(positiveNumber + " is not a multiple of 5 or 8.");
}


// Question 8  find the largest of three given integers
let int1 = Number(prompt("Enter the first integer:"));
let int2 = Number(prompt("Enter the second integer:"));
let int3 = Number(prompt("Enter the third integer:"));

if(int1 > int2 && int1 > int3) {
    console.log(int1 + " is the largest integer.");
} else if (int2 > int1 && int2 > int3) {
    console.log(int2 + " is the largest integer.");
} else if (int3 > int1 && int3 > int2) {
    console.log(int3 + " is the largest integer.");
} else {
    console.log("There is a tie for the largest integer.");
}

// Question 9  Compute The sum of the numbers from 1 to 10
let sum = 0;
for(let i = 1; i<= 10; i++){
    sum += i;
}
console.log("The sum of numbers from 1 to 10 is: " + sum);


// Question 10  display the pattern like right angle triangle using an asterisk.

let pattern = "";
for (let i = 1; i <= 5; i++) {
    pattern += "*";
    console.log(pattern);
}
// Question 11  check whether a given number is positive or negative..

let num = Number(prompt("Enter a number:"));
if (num > 0) {
    console.log(num + " is a positive number.");
} else if (num < 0) {
    console.log(num + " is a negative number.");
} else {
    console.log("The number is zero.");
}

// Qustion 13  print the sum of two numbers.

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let sumOfNumbers = number1 + number2;
console.log("The sum of " + number1 + " and " + number2 + " is: " + sumOfNumbers);


//  Question 14  Factorial of a number

let factorial = 1;
for(let i = 1; i<= 5 ; i++){
    factorial *= i;
}
console.log(factorial);

// Question 15  Create Simple Calculator (+ , - , * , /)
let numA = Number(prompt("Enter the first number:"));
let numB = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

let result;
switch (operator) {
    case "+":
        result = numA + numB;
        break;
    case "-":
        result = numA - numB;
        break;
    case "*":
        result = numA * numB;
        break;
    case "/":
        result = numA / numB;
        break;
    default:
        console.log("Invalid operator.");
        break;
}
console.log(result)
