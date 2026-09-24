// function declaration
addToCart(201);

function addToCart(productId) {
  console.log("Product with ID " + productId + " added to the cart!");
}

addToCart(101);

// addToCart2(205); #I get error
// function expression
const addToCart2 = function (productId, callback) {
  console.log("Product with ID " + productId + " added to the cart!");
  callback("added!");
  // return function() {

  // }
};

addToCart2(204, function (message) {
  console.log(message);
});

// callback function
// () => {

// }

// function() {

// }

let arr = [1, 10, 2, 4, 20];

let mapResult = arr.map((ele) => ele * ele);

arr.forEach(function (ele) {
  console.log(ele * ele);
});

console.log(mapResult);

// Application
// setTimeout(function() {
//   alert("Welcome!")
// }, 5000)

// high ordered function: a function that takes another function
//  as an argument or returns a function as a result
// addToCart2(), map(), forEach(), filter(), reduce(), find()
// applications: throttling, debouncing, currying, closures

// first class function: if function is treated as value, then it is called first class function
// arguments, function expression

// 1000ms = 1s

// Scope
var counter = 0; //global scope

function createCounter() {
  //local scope
  var count = 0;
  count++;
  return count;
}

console.log(counter);

let result = createCounter();
console.log(result);

// console.log(count);//get error

// closure function
function inc() {
  counter++;
  return counter;
}

console.log(inc());
console.log(inc());
console.log(inc());

// Lets's try to put it in local scope
function incVal() {
  let count = 0;
  count++;
  console.log(count);
}

incVal();
incVal();
incVal();

// now, comes closures function
// lexical scope

// main function
function incMain() {
  let counter = 0; //private variable

  // closure function
  return function () {
    counter++;
    console.log(counter);
  };
}

let func = incMain();
console.log(func);
func();
func();
func();

// function main() {
//   let x = 0;
//   function one() {
//     x++;
//   }
//   function two() {
//     x--;
//   }

//   return one;
// }

function Entertainment() {
  let userType = "Guest";

  function updateUserType(type) {
    userType = type;
    console.log("User type changed!");
  }

  return updateUserType;
}

console.log("Payment done!");

let update = Entertainment();
update("Premium");

// arrow function/ fat arrow (ES6)
// 1. syntax
function add() {
  console.log(arguments);
  console.log(arguments[0], arguments[1]);
  return 10 + 20;
}

console.log(add(10, 20));

addVal = () => {
  // console.log(arguments);//get error -> (Rest operator (ES6))
  return 10 + 20;
};

console.log(addVal());

// 2. return statements
add = () => 10 + 20;

console.log(add());

// 3. arguments

// 4. this keyword
