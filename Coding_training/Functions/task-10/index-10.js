function isLeap(day, month, year) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        if (day >= 1 && day < 29) {
            return `${++day}.${month}.${year}`;
        } else if (day === 29) {
            return `1.${++month}.${year}`;
        };
    } else if (year % 400 !== 0 || year % 4 === 0 && year % 100 === 0 || year % 4 !== 0 && year % 100 !== 0) {
        if (day >= 1 && day < 28) {
            return `${++day}.${month}.${year}`;
        } else if (day === 28) {
            return `1.${++month}.${year}`;
        };
    };
};

function nextDay(day, month, year) {
    if (day === 31 && month === 12) {
        return `1.1.${++year}`;
    };
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        if (day >= 1 && day < 31) {
            return `${++day}.${month}.${year}`;
        } else if (day === 31) {
            return `1.${++month}.${year}`;
        };
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day >= 1 && day < 29) {
            return `${++day}.${month}.${year}`;
        } else if (day === 30) {
            return `1.${++month}.${year}`; 
        };
    } else if (month === 2) {
        return isLeap(day, month, year);
    };
};

console.log(nextDay(2, 2, 2016));