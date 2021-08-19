//Making use of the Package for syling and taking a value
var readlineSync = require('readline-sync');
var chalk = require('chalk');

//We are naming the game here
console.log('---------------------------------\n', chalk.black.bold.bgRedBright('LEAPY YEAR (Check if you were born in Lepa Year or Not!'), '\n----------------------------------------------\n');


//Steps
console.log(chalk.white.bold('LEAP YEAR'), chalk.red.bold('\n1. Leap year is a year which consists of 366 days.\n2. In Leap year february month has 29 days.\n'));
console.log(chalk.white.bold('How Leap Year is Calculated'), chalk.gray.bold('\n1. If a number is mutiple of 4.\n2. If a number is mutiple of 400.\n3. If a number is not a mutiple of 100'), chalk.green.bold('\n4. If the conditions are fulfilled then we achieve the same.\n'));


//Taking the input 
var userName = readlineSync.question(chalk.red.bold("May I know your name?\n"));
console.log("\nWelcome\n",chalk.bold.cyan(userName), "\n","Let's play a game");

//Year of Birth
var birthYear = readlineSync.question(chalk.red.bold("\nCan you tell me your birth year?\n"), MIN = 0);

//Validation Function if user enters wrong input
function dateValidation() {
  if (isNaN(birthYear) || birthYear < 0) {
    console.log(chalk.bold.bgBlackBright.white("\nSorry! Insert the valid number."));
  } else {
    leapYearCalculate();
  }
}

//Calculate
function leapYearCalculate() {
  if ((birthYear % 400 == 0) || ((birthYear % 4 == 0) && (birthYear % 100 !== 0))) {
    console.log("-------------------------",chalk.black.bold.bgGreenBright("\nYou were born in a leap year"));
  } else {
    console.log("-------------------------",chalk.black.bold.bgRedBright("\nYou were not born in a leap year"));
  }
}

dateValidation();

