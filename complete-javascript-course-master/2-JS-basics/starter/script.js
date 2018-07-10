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
/*
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
*/

/*******************************************************************************
* The Ternary Operator (or conditional operator) and switch Statements
*/
/*
var firstName = 'John';
var age = 10;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// the statement above replaces an if else statement (makes it cleaner)

if (age >= 18) {
  var drink ='beer';
} else {
  var drink ='juice';
}*/

// switch Statements
// normal switch statements are in strings
/*var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs stuff.');
    break;
  default:
  console.log(firstName + ' does something else.');
}

// switch statement using a boolean logic statement
// there are some cases where you can do switch statments with variable conditions
switch (true){
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
  default:
  console.log(firstName + ' is a man.');
}


/*******************************************************************************
* Truthy and Falsy Values and Equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy Values
/*
var height;

height = 23;

if (height || height === 0) {
  console.log('variable is defined');
} else {
  console.log('variable has not been defined');
}

//Equality operators

if (height == '23'){
  console.log('The == operator does type coercion!');
}
*/


/*******************************************************************************
* Coding Challenge number 2
*/
/*
var teamJohn;
teamJohn = (89 + 120 + 103) / 3;
console.log(teamJohn);

var teamMark;
teamMark = (119 + 94 + 123) / 3;
console.log(teamMark);

var teamMary;
teamMary = (97 + 134 + 105) / 3;
console.log(teamMary);

if (teamJohn > teamMark && teamJohn > teamMary) {
  console.log('John\'s team wins the average total score with an average of' + ' ' + teamJohn + '!');
} else if (teamJohn < teamMark && teamMark > teamMary) {
  console.log('Mark\'s team wins the average total score with an average of' + ' ' + teamMark + '!');
} else if (teamJohn < teamMary && teamMark < teamMary){
  console.log('Mary\'s team wins the average total score with an average of' + ' ' + teamMary + '!');
} else {
  console.log('Everyone loses!.. or ties...or whatever')
}
*/


/*******************************************************************************
* Functions
*/
/*
function calculateAge(birthYear) { // function name
  return 2018 - birthYear; // it will return 2018 minus the birth years of each person
}
/*
var ageJohn = calculateAge(1990); // birth years of the people
var ageMike = calculateAge(1948); // birth years of the people
var ageJane = calculateAge(1969); // birth years of the people
console.log(ageJohn, ageMike, ageJane); // logs age of person

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year); // uses calculateAge() to get "age"
  var retirement = 65 - age; // calculates retirement age

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years. ');
  } else {
    console.log(firstName + ' is already retired.');
  }

}
yearsUntilRetirement(1990, 'John'); // calls function yearsUntilRetirement
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/
/*******************************************************************************
* Function Statements and Expressions
*/
/*
// Function Declaration
//function whatDoYouDo(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
      case 'teacher':
          return firstName + ' teaches kids how to code';
      case 'driver':
          return firstName + ' drives a cab';
      case 'designer':
          return firstName + ' designs stuff';
      default:
          return firstName + ' is lazy';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('retired', 'Max'));
*/

/*******************************************************************************
* Arrays
*/
/*
// Initialize new array
//two different ways to write an array
// arrays are number based and they start with the number 0...1...2...3... and so on..
var names = ['John', 'Mark', 'Jane']; //  <-- this one is more common
var years = new Array(1990, 1969, 1948); // <-- this one is less common

console.log(names); // displays names
console.log(names.length); // displays amount of names in the array above

// Mutate array data
names[1] = 'Ben'; // changes "Mark" to "Ben" in the array
names[names.length] = 'Mary'; // adds Mary to the end of the array
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // function that adds elements to the end of the array
john.unshift('Mr.'); // function that adds elements to the beginning of the array
console.log(john);

john.pop(); // functions that removes element from the end of an array
john.shift(); // functions that removes element from the beginning of an array
console.log(john);

console.log (john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer!' : 'John is a designer!'; // ternary operator to show if John is a designer or not
console.log (isDesigner);
*/

/*******************************************************************************
* Test Number 3
*/

function tipCalculator(bill){
var percentage;
  if (bill < 50){
    percentage = .2;
  }else if (bill >= 50 && bill < 200){
    percentage = .15;
  }else {
    percentage = .1;
  }
  return percentage * bill;
}

var bill = [124, 48, 268];

var tips = [ tipCalculator(bill[0]),
              tipCalculator(bill[1]),
                tipCalculator(bill[2])];
var finalValues = [bill[0] + tips[0],
                   bill[1] + tips[1],
                   bill[2] + tips[2]];
console.log(finalValues);
console.log(tips);
