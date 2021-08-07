let numbers = prompt('Введите число');
let strNum = "";
let num;
let i = 0;
let spaceIndex = 0;
let statisticPositive = 0;
let statisticNegative = 0;
let statisticZero = 0;
let statisticEven = 0;
let statisticOdd = 0;

while (i <= numbers.length) {
    if (numbers.charAt(i) === ' ' || i === numbers.length){
        strNum = numbers.substring(spaceIndex, i);
        spaceIndex = i;
        num = +strNum;
        if (num % 2 === 0) {
            statisticEven++;
        } else {
            statisticOdd++;
        };

        if (num > 0) {
            statisticPositive++;
        } else if (num < 0) {
            statisticNegative++;
        } else if (num === 0) {
            statisticZero++;
        }
    };
    i++;
}

alert('\n количество чётных чисел: ' + statisticEven +
'\n количество нечётных чисел: ' + statisticOdd +
'\n количество положительных чисел: ' + statisticPositive +
'\n количество отрицательных чисел: ' + statisticNegative +
'\n количесвто нулей: ' + statisticZero);