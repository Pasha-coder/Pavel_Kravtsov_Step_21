let number = +prompt('Введите число')
let i = 1;
let count = 0;

while(i <= number) {
    if (number - i >= 0) {
        i *= 10;
    };
    count++;
}

alert(count);