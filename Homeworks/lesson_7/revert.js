// function reverseArray(exampleArray) {
//     for (const [index, value] of exampleArray.entries()) {
//         const reverseIndex = exampleArray.length - index - 1;
//     }
//     return exampleArray[reverseIndex];
// }

// console.log(reverseArray([1, 2, 3, 4, 5]))

const arr = [1, 2, 3, 4, 5];
for (const [index, value] of arr.entries()) {
  const reverseIndex = arr.length - index - 1;
  console.log(arr[reverseIndex]);
}