function callback(arrayOfNumbers) {
    for (let value of arrayOfNumbers) {
        if (!Number.isFinite(value)) {
            throw new Error(`Переданное значение '${value}' является ${typeof value} - невозможно возвести в квадрат`);
        }
    }
    
    const newArrayOfNumbers = arrayOfNumbers.map(value => value ** 2);
    console.log(newArrayOfNumbers);
}

try {
    callback([1, 2, 3, '5']);
} catch(e) {
    console.log(e.message)
}