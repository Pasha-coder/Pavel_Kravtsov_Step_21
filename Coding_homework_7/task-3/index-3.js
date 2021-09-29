function modifyString(string) {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let array = string.split('');

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 'Я') {
           array[i] = array[i].toUpperCase();
        } else if (array[i] < 'а') {
           array[i] = array[i].toLowerCase();
        };
    };

    for (let i = 0; i < array.length; i++) {
        for (let n = 0; n < numbers.length; n++) {
            if (array[i] === numbers[n]) {
                array[i] = '_';
            };
        };
    };

    return array.join('');
};