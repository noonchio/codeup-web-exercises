
// Write a function, isShortWord,
// that takes in a string and returns
// the boolean value true if the passed argument
// is shorter than 5 characters.
// Return false otherwise.

//how many inputs? 1
//what type of inputs? string
//what type of output? boolean

    function isShortWord(str){
    return str.length < 5
}


// Write a function, isSameLength, that takes in
// two string inputs and returns the boolean value true
// if the passed arguments are the same length.
// Return false otherwise.

// how many inputs? 2
//what type of inputs? string
//what type of output? boolean

    function isSameLength(strX, strY){
    return strX.length === strY.length
    }
// Write a function, getSmallerSegment, that takes
// in a string and a number input. The function should return
// a substring of the first argument that is
// as many characters long as the second argument
// in lowercase.

// how many inputs? 2
//what type of inputs? string and num
//what type of output? lower case

    function getSmallerSegment (strInput, numInput){
    return strInput.substring(0, numInput).toLowerCase()
    }
