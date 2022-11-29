let object = {
    animal: "Dog",
    car: "Benz",
    house: "Duplex",
    dress: "coperate",
    age: "28",
    status: "single",
    gender: "female",
};

function printKey(objs) {
    return Object.keys(objs);
}

console.log(printKey(object));





// function print_keys(x){
//     var keys = Object.keys(x);
//     for(i = 0; i < keys.length; i++){
//        console.log(keys[i]);
//     }
// }