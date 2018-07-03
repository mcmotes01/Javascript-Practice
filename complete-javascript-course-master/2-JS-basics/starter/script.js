/*************************
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

/*********************************************
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


/*****************************************
* Basic operators
*/
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
