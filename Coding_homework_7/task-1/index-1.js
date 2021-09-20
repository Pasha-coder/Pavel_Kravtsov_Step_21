function giveStringInfo(string) {
    let letters = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];
    let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let array = string.split('');
    let lettersCount = 0;
    let digitsCount = 0;
    let symbolCount = 0;
    for(let i = 0; i < array.length; i++) {
        for(let n = 0; n < letters.length; n++) {
            if (array[i] === letters[n]) {
                lettersCount++;
            }
        };
    };
    for(let i = 0; i < array.length; i++) {
        for(let a = 0; a < digits.length; a++) {
            if (array[i] === digits[a]) {
                digitsCount++;
            };
        };
    };
    for (let i = 0; i < array.length; i++) {
        if (letters.find(item => item === array[i]) === undefined) {
            symbolCount++;
        };
    };
    for (let i = 0; i < array.length; i++) {
        if (digits.find(item => item === array[i]) === undefined) {
            symbolCount++;
        };
    };

    return `There are ${lettersCount} letters, ${digitsCount} digits and ${(symbolCount - (lettersCount + digitsCount)) / 2} other symbols in your string`
};



