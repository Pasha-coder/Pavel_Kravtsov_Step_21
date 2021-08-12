function isPrimitive (num) {
    for (let divider = 2; divider < num; divider++) {
        if (num % divider === 0) {
            return 'Число не простое';
        };     
    };
    return 'Число простое';
};

console.log (isPrimitive(2));