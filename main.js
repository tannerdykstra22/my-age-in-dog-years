// My age
var myAge = 25;

// Early years
var earlyYears = 2;

// Multiplying Early years
earlyYears = (earlyYears *= 10.5);

// Creating variable laterYears
var laterYears = myAge -= 2;

// Calculating dog years by multiplying the later years by 4
laterYears = laterYears *= 4;

// Calculating age in dog years
myAgeInDogYears = earlyYears += laterYears;

// Displaying my name in lower case using .toLowerCase() string method
myName = 'Tanner'.toLowerCase();

// Using string interpolation to display name, age, and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
