function callback(arrayOfNumbers) {
    for (let value of arrayOfNumbers) {
        if (isFinite(value) !== true || typeof value !== 'number') {
            throw new Error(`Переданное значение '${value}' является ${typeof value} - невозможно возвести в квадрат`)
        }
    }
    
    const newArrayOfNumbers = arrayOfNumbers.map(value => {
        return value ** 2;
    })
    console.log(newArrayOfNumbers);
}

try {
    callback([1, 2, 3, 'fsaf']);
} catch(e) {
    console.log(e.message)
}