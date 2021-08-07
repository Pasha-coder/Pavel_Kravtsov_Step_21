let firstNumber = +prompt('Введите число');
let secondNumber = +prompt('Введите число');
let start = firstNumber > secondNumber ? secondNumber : firstNumber;
let end = firstNumber < secondNumber ? secondNumber : firstNumber;
let result = 0;


while (start <= end) {
    result = result + start;
    start++;
}

alert(result);
