function reverseArray(exampleArray) {
    const preparedArray = [];
    for (const values of exampleArray) {
        preparedArray.unshift(values);
    }
    return preparedArray;
}