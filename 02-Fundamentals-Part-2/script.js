'use strict';

// Activating Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');


// const interface = 'Audio'; // Wrong
// const privete = 534; // Wrong


// Functions

function logger() {
	console.log('My name is Annie'); // it's just a message
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 8));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
	return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
// Function expression is much clearer to me
const calcAge2 = function (birthYeah) {
	return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow functions



