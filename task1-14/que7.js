// const id = 679489;

// const lastDigit = String(id).slice(-1);
// console.log(Number(lastDigit));



function lastDigit(number) {

    while (number <= 10)
        number /= 10;

    return Math.floor(number % 10);
}

let number = 98568;
console.log(lastDigit(number))