


//    const number = 10
//     for (var i = 1; i <= 10; i++) {
//        console.log(number + "*" + i + "=" + number * i);





// program to generate a multiplication table

// take input from the user
//const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
//for(let i = 1; i <= 10; i++) {

    // multiply i with number
//    const result = i * number;

    // display the result
//    console.log(`${number} * ${i} = ${result}`);

//2.
function showMultiplicationTable(num){
    for(var i = 1; i <= 10; i++){
        console.log(num + "*" + i + "=" + num * i)
    }
}
showMultiplicationTable(10)

//3.
var result;
var min = 20;
var max = 200;

for (var i = 0; i < 10; i++) {
    result = Math.ceil(Math.random() *(max - min) + min)
    console.log(result)
}

//4.


}














