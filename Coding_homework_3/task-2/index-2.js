let firstNumber = +prompt('Введите число');
let secondNumber = +prompt('Введите число');
let leastNumber = firstNumber < secondNumber ? firstNumber : secondNumber;

while (leastNumber >= 1) {
    if (firstNumber % leastNumber === 0 && secondNumber % leastNumber === 0) {
        alert(leastNumber);
        break;
    }
    leastNumber--;
}