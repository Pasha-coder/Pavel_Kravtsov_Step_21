let num = prompt('Введите число');
let shift = +prompt('На сколько знаков сдвинуть?');
let sub = "";
let left = "";
let i = 0;

if (shift === 0) {
    alert(num);
} else {
    while (i < shift) {
        sub += num.substring(i, i + 1);
        i++;
    }
    left = num.substring(shift, num.length);
    num = left + sub;
    alert(num);
};
