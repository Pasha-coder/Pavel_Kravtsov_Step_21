let arr = [75, 88, 36, 94, 32, 82, 71, 16, 22, 57];

function add(array, element, index) {
    array.splice(index, 1, element);
    return array;
};

console.log(add(arr, 8, 3));

