let number = +prompt('Введите число');
let devider = 1;
let result = "";

while (devider <= number) {
    if (number % devider === 0) {
        result = result + devider + ", ";
    }
    devider++;
}

alert(result);