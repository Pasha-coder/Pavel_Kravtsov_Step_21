let age = +prompt('Введите ваш возраст');

if (age > 0 && age < 12) {
    alert('Вы ребёнок');
} else if (age >= 12 && age < 18) {
    alert('Вы подросток')
} else if (age >= 18 && age < 60) {
    alert('Вы взрослый');
} else {
    alert('Вы пенсионер');
};