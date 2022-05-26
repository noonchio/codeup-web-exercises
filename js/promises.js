
// fetch(url, {headers: {'Authorization': 'token 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'}})
//     .then((res) => res.json())
//     .then(res => console.log(res))

fetch("https://api.github.com/users/Alfredo-Oviedo/events/public", {headers: {'Authorization': PROMISE_TOKEN}})

    .then((res) => res.json())
    .then(res => console.log(res))

