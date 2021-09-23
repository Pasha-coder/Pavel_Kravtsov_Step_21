function modifyString(string) {
    let lowerCase = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    let upperCase = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let lowerCaseIndexes = [];
    let upperCaseIndexes = [];
    let array = string.split('');

    for (let i = 0; i < array.length; i++){
        for (let n = 0; n < lowerCase.length; n++) {
            if(array[i] === lowerCase[n]) {
                lowerCaseIndexes.push(i);
            };
        };
    };

    for (let n = 0; n < lowerCaseIndexes.length; n++) {
        array[lowerCaseIndexes[n]].toUpperCase();
    };

    for (let i = 0; i < array.length; i++){
        for (let n = 0; n < upperCase.length; n++) {
            if(array[i] === upperCase[n]) {
                upperCaseIndexes.push(i);
            };
        };
    };

    for (let n = 0; n < upperCaseIndexes.length; n++) {
        array[upperCaseIndexes[n]].toLowerCase();
    };
    
    for(let i = 0; i < array.length; i++) {
        for (let n = 0; n < numbers.length; n++) {
            if(array[i] === numbers[n]) {
                array[i] = '_';
            }; 
        };
    };

    return array.join('');
}

let a = modifyString('3дрАвстВуй, дЯдЯ228!');
console.log(a);
    