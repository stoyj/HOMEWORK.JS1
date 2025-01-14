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
// const age = 15;

// if (age >= 18) {
// 	console.log('Sarah can start driving license 🚗');
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement
*/

// BMI calculation formula: BMI = mass / height ** 2
// Mass in kilograms, height in meters
const markMass = 78; // Example mass for Mark
const markHeight = 1.75; // Example height for Mark
const johnMass = 92; // Example mass for John
const johnHeight = 1.95; // Example height for John

// Calculate BMIs
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// Compare BMIs and print a message
if (markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
	console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
	console.log(`Both Mark and John have the same BMI (${markBMI.toFixed(1)})!`);
}


// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);


// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;
if (money) {
	console.log("Don't spend it all ;)");
} else {
	console.log('You should get a job!');
}

let height = 0;
if (height) {
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}

// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
// 	console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
// 	console.log('7 is also a cool number')
// } else if (favourite === 9) {
// 	console.log('9 is also a cool number')
// } else {
// 	console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drive...');
}


// The switch Statement

const day = 'friday';

switch (day) {
	case 'monday': // day === 'monday'
		console.log('Plan course structure');
		console.log('Go to coding meetup');
		break;
	case 'tuesday':
		console.log('Prepare theory videos');
		break;
	case 'wednesday':
	case 'thursday':
		console.log('Write code examples');
		break;
	case 'friday':
		console.log('Record videos');
		break;
	case 'saturday':
	case 'sunday':
		console.log('Enjoy the weekend :D');
		break;
	default:
		console.log('Not a valid day!');
}

if (day === 'monday') {
	console.log('Plan course structure');
	console.log('Go to codinng meetup');
} else if (day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
	console.log('Write code examples');
} else if (day === 'friday') {
	console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
	console.log('Enloy the weekend :D');
} else {
	console.log('Not a valid day!');
}


// Statements and Expressions

3 + 4
1991
true && false && !false

if (23 > 10) {
	const str = '23 is bigger';
}


const me = 'Stoy';
console.log(`I'm ${2037 - 1991} years old ${me}`);



// The Conditional (Ternary) Operator

const age = 23;
age >= 18 ? console.log('I Like to drink wine 🍷') : console.log('I like to drink water 💧');


const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
	drink2 = 'wine 🍷';
} else {
	drink2 = 'water 💧';
}
console.log(drink2);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);






