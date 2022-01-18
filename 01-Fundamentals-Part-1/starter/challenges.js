/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
//For Data 2 just change values

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
console.log(BMIMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);//true

//CODING CHALLENGE #2

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI of ${BMIMark} is higher than John's BMI of ${BMIJohn}`);
} else {
  console.log (`John's BMI of ${BMIJohn} is higher than Mark's BMI of ${BMIMark}`);
}*/


//CODING CHALLENGE #3

//1
const dolphinsAvgScore = (96, 108, 89) / 3;
const koalasAvgScore = (88, 91, 110) / 3;
//console.log(dolphinsAvgScore, koalasAvgScore);


//2
if (dolphinsAvgScore > koalasAvgScore) {
  console.log(`Dolphins is the winner!`);
} else if (koalasAvgScore > dolphinsAvgScore) {
  console.log(`The Koalas got it!`);
} else if (koalasAvgScore === dolphinsAvgScore) {
  console.log(`It's a tie!`);
}

//3
const minScore = 100;
const dolphinBonusScore1 = (97, 112, 101) / 3;
const koalasBonusScore1 = (109, 95, 123) / 3;

if (dolphinBonusScore1 > koalasBonusScore1 && dolphinBonusScore1 >= minScore) {
  console.log(`Dolphins are the winners!`);
} else if (koalasBonusScore1 > dolphinBonusScore1 && koalasBonusScore1 >= minScore) {
  console.log(`Koalas are the winners!`)
} else {
  console.log(`No team wins!`);
}


/* Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;//HERE YOU DEFINE IT OUTSIDE CODEBLOCK
if (birthYear <= 2000) {
  century = 20;//CHANGE IT INSIDE
} else {
  century = 21;
}
console.log(century);
*/



