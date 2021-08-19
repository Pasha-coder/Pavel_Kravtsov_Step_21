let arr = [75, 88, 36, 94, 32, 82, 71, 16, 22, 57];
let result = 0;

function massive(array) {
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    };
    return result;
}

console.log(massive(arr));