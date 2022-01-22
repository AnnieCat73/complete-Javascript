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
}


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

/*CODING CHALLENGE #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 


const bill = 275;
const tip1 = bill * 0.15;
const tip2 = bill * 0.20;
if (bill <= 300 && bill >= 50) {
  console.log(`The bill was ${bill} and the tip was ${tip1} and the total value is ${bill + tip1}!`)
} else {
  console.log(`The was ${bill} and the tip was ${tip2} and the total value is ${billAmount + tip2}!`);
}


//in ternary

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);



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



//CODING CHALLENGE #1 PART 2

const calcAverageDolphin = (score1, score2, score3) => {
  return (score1 + score2 + score3)/3;
}
//console.log(calcAverageDolphin(44, 23, 71));//46 for Dolphins
const avgDolphin = calcAverageDolphin(44, 23, 71);
//console.log(avgDolphin);

const calcAverageKoalas = (score1, score2, score3) => {
  return (score1 + score2 + score3)/3;
}
//console.log(calcAverageKoalas(65, 54, 49));//56 Koalas
const avgKoalas = calcAverageKoalas(65, 54, 49);
//console.log(avgKoalas);

const checkWinner = (avgDolphin, avgKoalas) => {
  if(avgDolphin > avgKoalas) {
    return `Dolphins wins`;
  } else if (avgKoalas > avgDolphin) {
    return `Koalas wins`;
  }
}

console.log(checkWinner(avgDolphin, avgKoalas));

