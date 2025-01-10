'use strict';

// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);


// Values and Variables
// let firstName = 'Matilda';
// console.log(firstName);



// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

console.log(jonas_matilda);
console.log($function);

let person = 'jonas';
let PI = 3.1415;

console.log(person);
console.log(PI);

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);
console.log(myCurrentJob);

let job1 = 'programmer';
let job2 = 'teacher';

console.log(job1);
console.log(job2);


// Date Types
let javascriptsFun = true;
console.log(javascriptsFun);

// console.log(typeof true);
console.log(typeof javascriptsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptsFun = 'YES';
console.log(typeof javascriptsFun);

// let year;
// console.log(typeof year);

console.log(typeof null);

// let const and var
// let age = 30;
// age = 31;

// console.log(age);

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Kamenova';
// console.log(lastName);


// Basic Operators
// Math operators
// const now = 2037;
// const ageAnnie = now - 1991;
// const ageDavid = now - 2018;
// console.log(ageAnnie, ageDavid);

// console.log(ageAnnie * 2, ageDavid / 10, 2 ** 2);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

// const firstName = 'Stoyanka';
// const lastName = 'Kamenova';
// console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x =x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
// console.log(ageAnnie > ageDavid); // >, <, >=, <=
// console.log(ageAnnie >= 18);

// console.log(now - 1991 > now - 2018);

// Operator Precedence
const now = 2037;
const ageAnnie = now - 1991;
const ageDavid = now - 2018;

console.log(now - 1991 > now - 2018);

let a, y;
a = y = 25 - 10 - 5; // a = y = 10, a = 10
console.log(a, y);

const averageAge = (ageAnnie + ageDavid) / 2;
console.log(ageAnnie, ageDavid, averageAge);


// Coding Challenge #1

/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// Test Data 1
let massMark1 = 78; // kg
let heightMark1 = 1.69; // meters
let massJohn1 = 92; // kg
let heightJohn1 = 1.95; // meters

// Calculate BMI for Test Data 1
let bmiMark1 = massMark1 / heightMark1 ** 2;
let bmiJohn1 = massJohn1 / heightJohn1 ** 2;
let markHigherBMI1 = bmiMark1 > bmiJohn1;

console.log("Test Data 1:");
console.log(`Mark's BMI: ${bmiMark1.toFixed(2)}, John's BMI: ${bmiJohn1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI? ${markHigherBMI1}`);

// Test Data 2
let massMark2 = 95; // kg
let heightMark2 = 1.88; // meters
let massJohn2 = 85; // kg
let heightJohn2 = 1.76; // meters

// Calculate BMI for Test Data 2
let bmiMark2 = massMark2 / heightMark2 ** 2;
let bmiJohn2 = massJohn2 / heightJohn2 ** 2;
let markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("\nTest Data 2:");
console.log(`Mark's BMI: ${bmiMark2.toFixed(2)}, John's BMI: ${bmiJohn2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI? ${markHigherBMI2}`);


// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
	multiple
	lines`);

// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
	console.log('Sarah can start driving license 🚗');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
