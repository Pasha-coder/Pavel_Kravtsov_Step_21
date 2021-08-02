let number = +prompt('Введите трёхзначное число');

if (number < 100 || number > 999) {
    alert('Введите трёхзначное число!');
} else {
    alert(`${String(number % 10) + Math.floor(number / 10) % 10 + Math.floor(number / 100)}`);
};