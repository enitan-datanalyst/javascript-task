function printValue(object) {
    let values = [];
    for (let property in object) {
        values.push(object[property]);
    }
    return values;
}
let object = {
    animal: "Dog",
    car: "Benz",
    house: "Duplex",
    dress: "coperate",
    age: "28",
    status: "single",
    gender: "female",
};
console.log(printValue(object));