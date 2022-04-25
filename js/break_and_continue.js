//
//
// var validNum = false
// do {
//     var userNum = parseInt(prompt("Please input an odd number between 1 and 50"));
//     if (userNum < 0 || userNum >= 50 || (userNum % 2 === 0)){
//         alert("Number is invalid because it does not meet criteria please try again.");
//     } else {
//         validNum = true
//         break
//     }
//
//
// } while (!validNum)
//
// for (var i = 1; i <= 50; i++){
//     if(i % 2 === 0) {
//         continue
//     }
//     if(i == userNum){
//         console.log("Yikes! Skipping number " + i)
//     } else{
//         console.log(("Here is an odd number: " + i));
//     }
//
// }
var inputIsTrue = false
do {
    var userInput = parseInt(prompt("Please enter an odd number between 1 and 50"))
    if (userInput % 2 === 0 || userInput < 0 || userInput > 50) {
        alert("Wrong input identified!!!")
    } else {
        inputIsTrue = true
        break
    }
}
while (!inputIsTrue)

    for (var i = 1; i < 50; i++) {
        if(i % 2 === 0) {
            continue
        }
        else if (i === userInput){
            console.log("Yikes! Skipping number " + i)
        } else {
            console.log("Here is an odd number: " + i)
        }
    }