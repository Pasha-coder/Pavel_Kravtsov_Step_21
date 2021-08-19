let arr = [75, 88, 36, 94, 32, 82, 71, 16, 22, 57];

function remove(array, index) {
    array.splice(index, 1);
    return array;
};

console.log(remove(arr, 1));

