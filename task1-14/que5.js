function javascriptIsFun(string, n) {
    let myString = " javascript is fun"

    while (n > 0) {
        myString += string;
        times--;
    }
    // console.log(myString)
    return myString;
}
console.log(javascriptIsFun("JavaScript is fun", 0));