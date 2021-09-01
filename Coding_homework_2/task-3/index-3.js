let number = +prompt('Введите трёхзначное число')

if (number <= 99 || number > 999) {
    alert('Введите ТРЁХЗНАЧНОЕ число!');
} else if (Math.floor(number / 100) === number % 10 || Math.floor(number / 100) === Math.floor(number / 10) % 10 || Math.floor(number / 10) % 10 === number % 10) {
    alert(`В числе ${number} есть одинаковые цифры`);
}  else {
    alert(`В числе ${number} одинаковых цифр нет`);
}