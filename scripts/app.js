// Comments in JavaScript use two forward slashes.
// alert("JS IS WORKING!");
console.log("This is a message from the app.js!")

//This is how we would declare a variable in C#
//We know that C# is a strict programming language, so we have to declare the data type
// string myName = "Karla";

//JavaScript is a loosely typed programming language
//We use the let prefix to declare when we would need to change the variable later
let myString = "Brandon";
let anotherString = 'Estrada'; //JavaScript will allow both single and double quotations for strings
let myInt = 4;  //This is an integer
let myBool = true;  //This is a boolean
let myNull = null;  //This is a null value

var oldWay = "This is the old way to create variables"; //Avoid using var

myString = "Karla";
console.log(myString);

//We can use Const to prevent reassignment of the variable.
const pi = 3.14;  //Const variables do not change
// pi = 4; //This will show an error in the Console as you can not change/reassign constant variables

console.log(myInt + pi);  //JavaScript will implicitly convert data types when necessary
console.log(myString + myInt); //JavaScript will convert the integer to a string and concatenate\
console.log(myString + " " + anotherString); //Concatenation in JavaScript
console.log( `FullName: ${myString} ${anotherString}`);  //Interpolation in JavaScript (NOTE: you have to use tildes not single quotations)

let myArray = [1, 2, 3, 4, "Five", true];
console.log(myArray);

let myElement = document.getElementById("myElement");
console.log(myElement)
myElement.textContent = "I changed the text using JavaScript!"; //This will allow us to give a value to the myElement