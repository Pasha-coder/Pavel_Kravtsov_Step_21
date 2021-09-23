function whatTheNumber(number) {
    if (number < 10 || number > 99) {
       return 'Вы ввели неправильное значение';
    };
    let string = number.toString();
    let firstNum = '';
    let secondNum = '';
    let teenNum = '';
    if(string[0] > 1) {
        switch(string[0]) {
            case '2':
                firstNum = 'Двадцать';
                break;
            case '3':
                firstNum = 'Тридцать';
                break;
            case '4':
                firstNum = 'Сорок';
                break;
            case '5':
                firstNum = 'Пятьдесят';
                break;
            case '6':
                firstNum = 'Шестьдесят';
                break;
            case '7':
                firstNum = 'Семьдесят';
                break;
            case '8':
                firstNum = 'Восемьдесят';
                break;
            case '9':
                firstNum = 'Девяносто';
                break;
        };
        switch(string[1]) {
            case '1':
                secondNum = 'один';
                break;
            case '2':
                secondNum = 'два';
                break;
            case '3':
                secondNum = 'три';
                break;
            case '4':
                secondNum = 'четыре';
                break;
            case '5':
                secondNum = 'пять';
                break;
            case '6':
                secondNum = 'шесть';
                break;
            case '7':
                secondNum = 'семь';
                break;
            case '8':
                secondNum = 'восемь';
                break;
            case '9':
                secondNum = 'девять';
                break;
            case '0':
                secondNum = '';
                break;
        }
        return firstNum + ' ' + secondNum;
    } else if (string[0] = 1) {
        switch(string) {
            case '10':
                teenNum = 'Десять';
                break;
            case '11':
                teenNum = 'Одиннадцать';
                break;
            case '12':
                teenNum = 'Двенадцать';
                break;
            case '13':
                teenNum = 'Тринадцать';
                break;
            case '14':
                teenNum = 'Четырнадцать';
                break;
            case '15':
                teenNum = 'Пятнадцать';
                break;
            case '16':
                teenNum = 'Шестнадцать';
                break;
            case '17':
                teenNum = 'Семнадцать';
                break;
            case '18':
                teenNum = 'Восемнадцать';
                break;
            case '19':
                teenNum = 'Девятнадцать';
                break;
        };
        return teenNum;
    };
};








