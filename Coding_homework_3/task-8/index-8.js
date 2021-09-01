let day = +prompt('Введите число от 1 до 7');
let newDay;

if (day >= 1 && day <= 7) {
    switch (day) {
        case 1:
            day = 'понедельник';
            break;
        case 2:
            day = 'вторник';
            break;
        case 3:
            day = 'среда';
            break;
        case 4:
            day = 'четверг';
            break;
        case 5:
            day = 'пятница';
            break;
        case 6:
            day = 'суббота';
            break;
        case 7:
            day = 'воскресенье';
            break;
    };
} else {
    alert('Ошибка');
};

while (newDay !== false) {
    newDay = confirm(`День недели - ${day}. Хотите увидеть следующий день?`);

    switch (day) {
        case 'понедельник':
            day = 'вторник';
            break;
        case 'вторник':
            day = 'среда';
            break;
        case 'среда':
            day = 'четверг';
            break;
        case 'четверг':
            day = 'пятница';
            break;
        case 'пятница':
            day = 'суббота';
            break;
        case 'суббота':
            day = 'воскресенье';
            break;
        case 'воскресенье':
            day = 'понедельник';
            break;
    };
};
