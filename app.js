// My Age
const myAge = 34;
// Early Years
let earlyYears = 2;
earlyYears *= 10.5;
// Later Years
let laterYears = myAge - 2;
// Later Years Multiplier
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Dog Years
let myAgeInDogYears = earlyYears + laterYears;
// My Name
let myName = 'Kendall Wills'.toLowerCase();

// Age String
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);