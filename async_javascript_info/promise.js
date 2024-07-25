"use strict";

let promise01 = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

let promise02 = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .then takes the successful result or error of reject from a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);

// example for error
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);


// if we are interested only in errors:
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second


// just like in try, catch, there is a finally for promise as well
// finally always runs
new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Promise ready")) // triggers first
    .then(result => alert(result)); // <-- .then shows "value"