//console.log('hello');

//alert('hello this is sufiyan');

//Variables
var b = 'smoothie';
//console.log(b);

var someNumber = 45;
//console.log(someNumber);



//var age = prompt('What is your age?');
//console.log(age);
//document.getElementById('someText').innerHTML = age;

//Numbers in javascript
var num1 = 10;

//increment
num1++;
//decrement
num1--;
//console.log(num1);

//divide multiply remainder
//console.log(num1 / 6);

//increment or decrement by any number

//console.log(num1 += 20);

/*functions
 1. Create a function
 2. call a function
*/
function fun() {
    console.log('this is a function');
}

//Call
//fun();

/*lets create a function that takes in a name and says hello followed by your name

*/
//var name = prompt('What is your name');

function greeting(yourName) {
    
    var result = 'Hello' + ' ' + yourName; // String Concatenation
    console.log(result);
}
//greeting(name);
//greeting();

//How do arguments work in function

// How do we add two numbers in a function

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

//sumNumbers(10,10);

//while loop
/*
var num = 0;

while (num < 100) {

    num += 1
    console.log(num);
}

*/

//for loop
/*
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
*/

//Data Types

// number
var yourage = 18;//number
let yourName = 'bob'; // string
let name = { first: 'jane', last: 'Doe' };// objec
let truth = false;// boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing = null;// value null

//string in javascript

let fruit = 'banana';
let fruit1 = 'banana,apples,oranges,blackberry';
let moreFruits = 'banana\nApples';
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit1.split(','));//split by a comma
console.log(fruit.split('')); // split by character

//arrays
let fruits = ['banana', 'apples', 'orange', 'pineapples'];
fruits = new Array('banana', 'apples', 'orange', 'pineapples');
console.log(fruits[1]);// access value at index
fruits[0] = 'pear'
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods

console.log(fruits.toString())
console.log(fruits.join('-'));
console.log(fruits, fruits.pop(), fruits)//removes last item
console.log(fruits.push('blackberries'), fruits);//appends
fruits[fruits.length] = 'new fruit';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);
let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function (a, b) { return a - b }));//asc
console.log(someNumbers.sort(function (a, b) { return b - a }));//desc

let emptyArray = new Array();

for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

//Objects in Javascripts

let student = {
    first: 'sufiyan',
    last: 'ansari',
    age: 25,
    height: 165,
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student);
//console.log(student.first);
//console.log(student.last);
//student.first = 'notsufiyan';//change value
console.log(student);
student.age++
console.log(student.age);
console.log(student.studentInfo());

//conditional control flows (if else)

//18 - 35 is my target demgraphics
//&& AND
// || OR

var age = 45;
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

//Switch Statement

// differentiate weekday vs weekend
//day 0 Sunday
// day 6 -->saturday
// day 4 -->thursday -->weekday

switch (0) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
}
console.log(text);