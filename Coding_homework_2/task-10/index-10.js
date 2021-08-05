let day = +prompt('Введите день');
let month = +prompt('Введите месяц');
let year = +prompt('Введите год');


if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    if (day >= 1 && day <= 30) {
        day += 1;
    } else if (day === 31) {
        day = 1;
        month += 1;
    } else {
        alert('Ошибка ввода');
    }
};

if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (day >= 1 && day <= 29) {
        day += 1;
    } else if (day === 30) {
        day = 1;
        month += 1;
    } else {
        alert('Ошибка ввода');
    }
};

if (month === 2) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        if (day >= 1 && day <= 28) {
            day += 1;
        } else if (day === 29) {
            day = 1;
            month += 1;
        } else {
            alert('Ошибка ввода');
        };
    } else if (year % 400 !== 0 || year % 4 !==0 && year % 100 !==0 || year % 4 === 0 && year % 100 === 0) {
        if (day >= 1 && day <= 27) {
        day += 1;
        } else if (day === 28) {
        day = 1;
        month += 1;
        } else {
        alert('Ошибка ввода');
        }
    };
};

if (day === 31 && month === 12) {
    day = 1;
    month = 1;
    year += 1;
} else {
    alert('Ошибка ввода');
};

alert(`${day}.${month}.${year}`);