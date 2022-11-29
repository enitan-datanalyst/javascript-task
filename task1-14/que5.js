function javascriptIsFun(string, times) {
    let myString = " "

    while (times > 0) {
        myString += string;
        times--;
    }
    // console.log(myString)
    return myString;
}
javascriptIsFun("JavaScript is fun", 2);

// function repeatStringNumTimes(string, times) {
//     var repeatedString = "";
//     while (times > 0) {
//         repeatedString += string;
//         times--;
//     }
//     return repeatedString;
// }
// repeatStringNumTimes("abc", 3);