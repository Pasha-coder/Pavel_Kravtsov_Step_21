let firstArray = [75, 88, 36, 94, 32, 82, 71, 16, 22, 57];
let secondArray = [52, 86, 10, 92, 68];

function merge(array1, array2) {
    let newArray;
    newArray = array1.concat(array2);
    return newArray;
};

console.log(merge(firstArray, secondArray));