function abbreviate(string) {
    let array = string.split('');
    let newArray = [];
    array[0] = array[0].toUpperCase();
    newArray.push(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (array[i] === ' ' || array[i] === '-') {
            array[i + 1] = array[i + 1].toUpperCase();
            newArray.push(array[i + 1]);
        };
    };
    return newArray.join('');
}

