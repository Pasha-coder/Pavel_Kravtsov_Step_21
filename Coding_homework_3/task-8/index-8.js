let day = +prompt('Введите число от 1 до 7');
let newDay;

if (day >= 1 && day <= 7) {
    switch (day) {
        case 1:
            day = 'Понедельник';
            break;
        case 2:
            day = 'Вторник';
            break;
        case 3:
            day = 'Среда';
            break;
        case 4:
            day = 'Четверг';
            break;
        case 5:
            day = 'Пятница';
            break;
        case 6:
            day = 'Суббота';
            break;
        case 7:
            day = 'Воскресенье';
            break;
    };
} else {
    alert('Ошибка');
};

while (newDay !== false) {
    newDay = confirm(`День недели - ${day}. Хотите увидеть следующий день?`);

    switch (day) {
        case 'Понедельник':
            day = 'Вторник';
            break;
        case 'Вторник':
            day = 'Среда';
            break;
        case 'Среда':
            day = 'Четверг';
            break;
        case 'Четверг':
            day = 'Пятница';
            break;
        case 'Пятница':
            day = 'Суббота';
            break;
        case 'Суббота':
            day = 'Воскресенье';
            break;
        case 'Воскресенье':
            day = 'Понедельник';
            break;
    };
};
