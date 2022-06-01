
// fetch(url, {headers: {'Authorization': 'token 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'}})
//     .then((res) => res.json())
//     .then(res => console.log(res))

const request = fetch("https://api.github.com/users/Alfredo-Oviedo/events/public", {headers: {'Authorization': PROMISE_TOKEN}})

    .then((res) => res.json())
    .then(res => console.log(res))

    const getDateLastCommit = (userName) => {
        fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': PROMISE_TOKEN}})
            .then((res) => {
            console.log(res);
            return res.json();
            }).then((data) => {
                console.log(data)
            console.log(data[0].created_at);
        });

    };
    getDateLastCommit('Alfredo-Oviedo')

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.


// let p = new Promise((resolve, reject) => {
//
// })
//
// const wait = (num) => {
//         setInterval(message, num)
//     function message() {
//             console.log('You will see this after 1 second')
//     }
// }

// console.log(wait(1000));

// const wait = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success');
//     } else {
//         reject('Failed');
//     }
//
// });
//
//     wait.then((message) => {
//         console.log('This is in the then: ' + message);
// }).catch((message) => {
//         console.log("This is in the catch" + message);
// });

const wait = (num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('You will see this after 3 second')
            }, num)

    })
}

wait(3000).then((res) => console.log(res) )









const settings = {
    theme: "Dark",
    version: "2.4.1",
    beta: false
};

const keys = Object.keys(settings);
console.log(keys); // ["theme", "version", "beta"]
keys.forEach(key => {
    // log the value of every key dynamically
    console.log(settings[key]);
});











