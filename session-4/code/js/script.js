// callback function
// Application
setTimeout(() => {
  // alert("Hello");
  console.log("Hello");
}, 2000);

//callback hell or pyramid of doom
// function getData(callback) {
//   callback("data");
// }

// getData(function() {
//     getPosts(function() {
//         getSpecificPost(function() {
//             getComments()
//         })
//     })
// })

// Promises
let myObj = new Promise((res, rej) => {
  //producing code
  let x = 0;
  if (x == 0) {
    res("Success");
  } else {
    rej("Error");
  }
  //async code, any request
});

console.log(myObj);

//consuming code
myObj
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("10");
console.log(20);

// Application
// axios
// fetch

// create a promise object and resolve should exact after 2 seconds
function myPromiseExecution() {
  const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise resolved after 2 seconds");
    }, 2000);
  });

  return myPromise;
}

const result = myPromiseExecution();
console.log(result);
result.then((res) => {
  console.log(res);
});

// async/await
async function add() {
  const r = (await 10) + 20;
  return r;
}

add()
  .then((res) => {
    console.log(res);
  })
  .catch();

// API Call
async function getData() {
  // try {
  //     const user = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     return user.data[0]
  // }
  // catch(err) {
  //     console.log(err);
  // }
}

async function displayData() {
  try {
    const user = await getData();
    const posts = await getPosts(user.id);
    return posts;
  } catch (err) {
    console.log(err);
  }
}

console.log(10);
console.log(20);

// Event Loop
setTimeout(() => {
  console.log("Hello");
}, 0);


// Task
//  Creating a Simple Promise: Write a function that returns a promise which resolves to a specific object after 1 second.
//  Create an object with a method that returns a promise. The promise should resolve with the object's properties after 2 seconds.
//  Write a function that accepts an object with two promises. Return a new promise that resolves when both resolve (Promise.all).
//  Write a function that takes a promise and a timeout. If the promise exceeds the timeout, reject with an error (Promise.race).
