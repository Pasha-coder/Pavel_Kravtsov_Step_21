let arr = [75, 88, 36, 94, 32, 82, 71, 16, 22, 57];
let greatest = 0;

function theGreatest(array) {
    for (let i = 0; i < array.length; i++) {
        if (greatest < array[i]) {
            greatest = array[i];
        };
    };
    return greatest;
};

console.log(theGreatest(arr));