function power(a, b) {
    // let a = 10;
    // let b = 5;
    let pow = 1;

    for (let i = 0; i < b; i++) {
        pow = pow * a;
    }

    return pow;
}
let a = 10;
let b = 5;

let result = power(a, b);
console.log(result);



//console.log(Math.pow(10, 5));