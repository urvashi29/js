// Variables
var firstName = "John";
var firstName = "Jane";

let lastName = "Doe";
// let lastName = "Smith"

// if, for, {}
var a = 10; //global scope
{
  let a = 20; //block scope
  a = 100;
  console.log(a); //100
}
console.log(a); //10

const age = 30;
// age = 40;//get error
console.log(age);
// const age = 40; //get error

// Hoisting in js
y = 10;
console.log(y);
var y;

// Hoisting with let and const
// y = 10;
// console.log(y);
// let y; //doesn't work (Temporal dead zone)

// z = 20;
// console.log(z);
// const z;

//practice
var z = 20;

// {
//   z = 100;
//   console.log(z); //100
//   let z;
//   console.log(z); //null
// }

console.log(z); //20

// Datatypes
// basic datatypes:
// number, string, boolean, null, undefined
let num = 10;
let salary = 1092002.78;

console.log(typeof num);
console.log(typeof salary);

// ''  or "" or ``
let str = "";
let strVal = "Hello";
let strNum = "9e8d090";

console.log(typeof str);
console.log(typeof strVal);
console.log(typeof strNum);

// true, false
let isLoggedIn = true;
console.log(typeof isLoggedIn);

// undefined
let data;
console.log(data); //undefined
console.log(typeof data); //undefined

// null
let some = null;
console.log(some);
console.log(typeof some); //object

// complex datatypes:
// arrays, objects, functions
// index/position starts from 0

let colors = ["red", "green", "orange", "pink", "blue"];
console.log(colors[0]);
console.log(colors);
console.log(typeof colors); //object

// objects
// key(property):value pair
let product = {
  productName: "Laptop",
  price: 1000000,
  color: "Pink",
  brand: "Apple",
  isAvailable: true,
  details: {
    model: "Macbook Pro",
  },
};

console.log(product);
console.log(product.productName);
console.log(product.details.model);

console.log(typeof product); //object

// Arrays of objects
let products = [
  { id: 10, name: "Laptop", price: 100000 },
  { id: 1, name: "Desktop", price: 100000 },
  { id: 2, name: "Tablet", price: 100000 },
];

// Operators
// Arithmatic: +, -, /, %, *, %, ++, --
// Assignments: +=, -=
// Comparison Operators: ==, ===, !=, !==, <, >
// Logical Operators: &&, ||, !
// Binary Operators: &, |

// String Operators (+)
let strOne = "Learning";
let strTwo = "JavaScript";

console.log(strOne + " " + strTwo);
console.log(strOne + 2024); //
console.log(10 + 10 + "20");

// implicit coerson: automatic type conversion
console.log("10" / 2);
console.log("hufhe" / 2); //NaN

console.log("hell0" - 10);
console.log("20" - 10);

// check opeartor precedence
// type of operand: if "+" is present and one of opearnd is string, concatenate
// if not "+" and anyother is present and numeric string is present, convert it to number
// if not numeric string, then it is always NaN

// Advance Operators: Ternary, Spread, Nullish, optional chaining, rest operators
// Ternary Operator (conditional operator)
// condition ? () : ()

firstName == "John"
  ? console.log("Hello" + " " + firstName)
  : console.log("Wrong Input");
