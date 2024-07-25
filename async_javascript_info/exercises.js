// create a promise-based alternative
// The function delay(ms) should return a promise. That promise should resolve after ms, so that we can add 
// .then to it, like this:
function delay(ms) {
    // your code
}

delay(3000).then(() => alert('runs after 3 seconds'));


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

