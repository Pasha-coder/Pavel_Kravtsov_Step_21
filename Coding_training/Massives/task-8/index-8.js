let firstArray = [75, 88, 36, 94, 32, 82, 71, 16, 22, 57];
let secondArray = [75, 88, 36, 94, 32];

function common(array1, array2) {
    let dublicates = [];
    for (let i = 0; i < array1.length; i++) {
        for (let n = 0; n < array2.length; n++) {
            if (array1[i] === array2[n]) {
               dublicates.push(array1[i]);
            };
        };
    };
    return dublicates;
};

console.log(common(firstArray, secondArray));