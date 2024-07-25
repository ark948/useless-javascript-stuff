function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404


// re-write it into async format
// my solution
async function loadJson(url) {
    let response = await fetch(url);
    let json_response = response.json();
    if (json_response.status == 200) {
        await new Promise((resolve, reject) => json_response);
    } else {
        throw new Error(json_response.status);
    }
}

// actual solution (mine was pretty close)
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }

    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404 (4)


// task 3
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
    wait().then(result => alert(result)); // answer
}