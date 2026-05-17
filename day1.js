//Premitive data types in JavaScript
//String
let name = "John Doe";
//Number
let age = 30;
//Boolean
let isStudent = true;
//Null
let address = null;
//Undefined
let phoneNumber;
//Symbol
let uniqueId = Symbol("id");
//BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
 //NON-primitive data types in JavaScript
//Object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
};
//Array
let numbers = [1, 2, 3, 4, 5];
//Function
function greet() {
    console.log("Hello, World!");
}
//Date
let currentDate = new Date();
//RegExp
let regex = /hello/i;

#Scope in JavaScript
//Global Scope
var globalVar = "I am a global variable";
function globalFunction() {
    console.log(globalVar);
}
//Local Scope
function localFunction() {
    var localVar = "I am a local variable";
    console.log(localVar);
}
//Block Scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar);
}

//Function Scope

//Variables declared inside a function are accessible only within that function.

function test() {
    let x = 10;
    console.log(x);
}

test();
//x cannot be used outside the function.


//lexical scope is not type of scopes

//Correct. Lexical scope is not a separate type of scope like global, function, or block scope.

//It is a rule/mechanism that explains how scope works in JavaScript.

//Types of Scope in JavaScript
//Global Scope
//Function Scope
//Block Scope
//Module Scope
//Lexical Scope (Static Scope)

//Lexical scope means:

//A function can access variables from its parent scope based on where the function is written in the code.

//Example:

function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }

    inner();
}

outer();

//Here inner() accesses a because of lexical scoping.