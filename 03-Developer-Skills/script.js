// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

// Coding Challenge

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);

/*
I'm building a time tracking application for freelancers. write a function called analyzeWorkWeek that receives an array of daily work hours for a certain week, and  returns an object with the following data: 
1. Total hours worked 
2. Average daily hours (round to one decimal place) 
3. The day with the most hours worked (assume monday is day 0 in the array) 
4. Number of days worked (days with more than 0 hours) 
5. Whether the week was full-time (worked 35 hours or mome)
TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)
TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// function analyzeWorkWeek(dailyHours) {
//   // Calculate total hours worked
//   const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

//   // Calculate average daily hours (round to one decimal place)
//   const averageDailyHours = parseFloat(
//     (totalHours / dailyHours.length).toFixed(1)
//   );

// Find the day with the most hours worked
//   const maxHours = Math.max(...dailyHours);
//   const dayWithMostHours = dailyHours.indexOf(maxHours);

//   // Count the number of days worked (days with more than 0 hours)
//   const daysWorked = dailyHours.filter((hours) => hours > 0).length;

//   // Determine if the week was full-time (worked 35 hours or more)
//   const isFullTime = totalHours >= 35;

//   // Return the analysis object
//   return {
//     totalHours,
//     averageDailyHours,
//     dayWithMostHours,
//     daysWorked,
//     isFullTime,
//   };
// }

// // Test data
// const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0]; // [7.5, 8, 6.5, 0, 8.5, 4, 0];
// const analysis = analyzeWorkWeek(weeklyHours);
// console.log(analysis);

// Output for the test data

/* {
  "totalHours": 34.5,
  "averageDailyHours": 4.9,
  "dayWithMostHours": 5, 4; // false;
  "daysWorked": 5,
  "isFullTime": true; // false
}
*/

function analyzeWorkWeek(dailyHours) {
  // Days of the week
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Calculate total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours (round to one decimal place)
  const averageDailyHours = parseFloat(
    (totalHours / dailyHours.length).toFixed(1)
  );

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const dayWithMostHoursIndex = dailyHours.indexOf(maxHours);
  const dayWithMostHours = daysOfWeek[dayWithMostHoursIndex]; // Map index to day name

  // Count the number of days worked (days with more than 0 hours)
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  // Determine if the week was full-time (worked 35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the analysis object
  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

// Test data
const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

/*
{
  totalHours: 34.5,
  averageDailyHours: 4.9,
  dayWithMostHours: 'Friday',
  daysWorked: 5,
  isFullTime: true,
}

*/
