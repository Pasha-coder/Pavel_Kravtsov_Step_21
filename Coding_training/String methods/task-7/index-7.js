function countWords(string) {
    let count = 1;
    for (i = 0; i < string.length; i++) {
        if (string[i] === ' ' && string[i + 1] !== ' ') {
            count++;
        };
    };
    return count;
};

console.log(countWords('Максим9,  я хочу кушать!'));