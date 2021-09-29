function transformToCamelCase(string) {
    let array = string.split('');

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '-') {
            array[i + 1] = array[i + 1].toUpperCase();
            array.splice(i, 1);
        };
    };

    return array.join('');
};

