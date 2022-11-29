function addArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    console.log(sum)
    return sum;
};
addArray([10, 19, 80, 79]);

// function addArray(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i += 1) {
//         sum += array[i]
//     }

//     console.log(sum)
//     return sum
// }
// addArray([1, 4, 0, 9, 13]);