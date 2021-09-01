let number = +prompt('Введите пятизначное число');

if (number < 10000 || number > 99999) {
    alert('Вы ввели неправильное число');
} else if (Math.floor(number / 10000) === number % 10 && Math.floor(number / 1000) % 10 === Math.floor((number % 100) / 10)) {
    alert('Число является палиндромом');
} else {
    alert('Число не является палиндромом');
}