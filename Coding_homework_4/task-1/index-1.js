function compare(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return -1;
    } else if (num1 === num2) {
        return 0;
    };
};

console.log(compare(1,3));