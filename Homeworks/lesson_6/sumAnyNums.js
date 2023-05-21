function sumDivisibleByThree(sameArray) {
    let sum = 0;
    for (const value of sameArray) {
        if (isFinite(value) !== true) {
            throw new Error(`Аргумент '${value}' должен быть числом`);
        }
        
        if (value % 3 === 0) {
            sum += value;
        } 
    }
    return sum;
}

try {
    console.log(sumDivisibleByThree([1, 2, 3, 4, 5, 6]));
} catch(e) {
    console.log(e.message);
}