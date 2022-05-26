const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let atLeastThree = users.filter(user => user.languages.length > 3)

console.log(atLeastThree)

// Use .map to create an array of strings where each element is a user's email address

let eMail = users.map(user => user.email)

console.log(eMail)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// const initialValue = 0
// yearsOfExperience
let totalAvg = users.reduce((previousValue, currentValue) => {
    console.log(previousValue)
    console.log(currentValue)
     return previousValue + currentValue.yearsOfExperience
}, 0);
totalAvg = totalAvg / users.length

console.log(totalAvg)

// Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((previousEmail, currentEmail) => {
    console.log(previousEmail.email);
    if (previousEmail.length < currentEmail.email.length) {
        previousEmail = currentEmail.email
    }
    return previousEmail
}, "");
console.log(longestEmail)

// var authors = [{
//     name: "a"
// }, {
//     name: "b"
// }, {
//     name: "c"
// }];
// var result = authors.reduce(function(author, val, index) {
//     var comma = author.length ? ", " : "";
//     return author + comma + val.name;
// }, '');
// console.log(result);



let name = users.reduce((previousValue, currentValue) => {
    // console.log(previousValue)
    // console.log(currentValue.id)
        previousValue.push(currentValue.name)



    return previousValue

}, [])

console.log(name)

console.log(`Your instructors are: ${ name } `)




