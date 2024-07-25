"use strict";

// async/await syntax makes the use of Promises easier

// async keyword before any function, makes it always return a Promise

async function f1() {
    return 1;
}

f1().then(alert); // alert 1

// this is also the same
async function f2() {
    return Promise.resolve(1);
}

f2().then(alert); // 1


// the keyword await
// which only works inside async functions
// makes js wait for a promise to settle, and returns its result

async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000)
    });

    let result = await promise; // wait until the promise is resolved
    alert(result);
}


// async function that will retrieve user avatar from somewhere
async function showAvatar() {
    // read our json
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // show the avatar
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();

    return githubUser;
}