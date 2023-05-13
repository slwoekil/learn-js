function sumDivisibleByThree() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            sum = "Передаваемый аргумент должен быть числом"
            break;
         }
    if (arguments[i] % 3 === 0) {
        sum += arguments[i];
    }
    }
    return sum;
}
console.log(sumDivisibleByThree(6, 7, 333))



