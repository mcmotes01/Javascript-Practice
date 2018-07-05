/*******************************************************************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName ='Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher'
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'john and mark';
var if = 23;
*/

/*******************************************************************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;
*/
// Type coercion
/*
console.log(firstName + ' is ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' ' + age + ' years old ' + job + '. Is he Married? ' + isMarried);

*/
//Variable mutation
/*
age = 'twenty eight';
job = 'driver';

alert(firstName + ' ' + age + ' years old ' + job + '. Is he Married? ' + isMarried);

 var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/


/*******************************************************************************
* Basic operators
*/
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//logic operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operators
console.log(typeof johnOlder); //boolean
console.log(typeof ageJohn); //number
console.log(typeof 'Mark is older than John'); //string
var x;
console.log(typeof x); //undefined
*/

/*******************************************************************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// multiple operators
var isFullAge = now - yearJohn >= fullAge; // age 29 so it's true
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple assigments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// more operators
//x = x * 2; is the same as below
x *= 2;
console.log(x);
x += 10;
console.log(x);

// x = x + 1 and x += 1 and x++ are all the same thing // x++ just adds 1 to total

x++;
console.log(x);
*/


/*******************************************************************************
* First coding Challenge
*/
// BMI = mass / height^2 = mass / (height * height)
// (mass in kg and height in meter)
/*
//1. store Mark's and John's mass and height in Variables
var massMark = 70; // kg
var heightMark = 1.755; // meters

var massJohn = 90; // kg
var heightJohn = 1.505; // meters
//2. calculate both their BMIs

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

//3. Create a boolean variable containing information about whether Mark has a highter
//BMI than john
var bmiJohnMark = bmiMark > bmiJohn;
console.log(bmiJohnMark);
//4. Print a string to the concole containing the variable from step 3.
console.log('Mark\'s BMI ='+ ' ' + bmiMark + '. ' + 'John\'s BMI =' + ' ' + bmiJohn + '. ' + 'Is Marks BMI is higher?' + ' ' + bmiJohnMark);
*/

/*******************************************************************************
*If / Else Statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is single!');
}
// === means is equal to
// written in a different way... removed the civilStatus var and replace with isMarried
// removed the string 'married' and just leave the var isMarried
var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' is single!');
}


var massMark = 70; // kg
var heightMark = 1.755; // meters

var massJohn = 90; // kg
var heightJohn = 1.505; // meters

var bmiMark = massMark / (heightMark * heightMark);
//console.log(bmiMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
//console.log(bmiJohn);

var bmiJohnMark = bmiMark > bmiJohn;
//console.log(bmiJohnMark);

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is greater than John\'s');
} else {
  console.log('John\'s BMI is greater than Mark\'s');
}
*/

/*******************************************************************************
* Boolean Logic
*/

// && === AND
// || === or
// ! === not

var firstName = 'John';
var age = 25;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {  // between 13 and 20 === age >= 13 AND < 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // between 20 and 30 years === age
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
