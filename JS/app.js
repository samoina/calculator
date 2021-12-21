//This is for practice with seperation of logic - user interface/front-end logic and business logic/business-end
// This is the back-end
//Function that adds numbers

let number1;
let number2;


alert("You are about to add two numbers.")
number1 = parseInt(prompt("Enter a number:"));
number2 = parseInt(prompt("Enter a second number:"));

// let add = function (number1, number2) {
//   return number1 + number2;
// }

let add = (number1, number2) => number1 + number2

alert(add(number1, number2));

//Function that subtracts numbers
let digit1;
let digit2;

alert("You are about to subtract two numbers");
digit1 = parseInt(prompt("Enter a digit: "));
digit2 = parseInt(prompt("Enter a second digit:"));

// function subtract (digit1, digit2) {
//   return digit1 - digit2
// }

//Arrow function for above
let subtract = (digit1, digit2) => digit1-digit2;
alert(subtract(digit1, digit2));

//Function to multiply two numbers
let firstNumber;
let secondNumber;

alert("You are about to multiply two numbers");
firstNumber = parseInt(prompt("Enter the first number: "));
secondNumber = parseInt(prompt("Enter the second number: "));

// function multiply (firstNumber, secondNumber) {
//   return firstNumber * secondNumber;
// }

//Arrow function for above
let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

alert(multiply(firstNumber, secondNumber));

//Function to multiply two numbers

let Num1;
let Num2

alert("You are about to divide two numbers");
Num1 = parseInt(prompt("Enter the first number: "));
Num2 = parseInt(prompt("Enter the second number: "));

let divide = (Num1, Num2) => Num1 /Num2;

alert(divide(Num1, Num2));

