let firstNum = +prompt('Введите число');
let secondNum = +prompt('Введите число');
let act = prompt('Введите знак арифметического действия');

switch (act) {
    case '+':
        alert(`${firstNum + secondNum}`);
        break;
    case '-':
        alert(`${firstNum - secondNum}`);
        break;
    case '*':
        alert(`${firstNum * secondNum}`);
        break;
    case '/':
        alert(`${firstNum / secondNum}`);
        break;
};

let question = prompt('Хотите решить ещё один пример?');

while (question !== null) {
    let firstNum = +prompt('Введите число');
    let secondNum = +prompt('Введите число');
    let act = prompt('Введите знак арифметического действия');

    switch (act) {
        case '+':
            alert(`${firstNum + secondNum}`);
            break;
        case '-':
            alert(`${firstNum - secondNum}`);
            break;
        case '*':
            alert(`${firstNum * secondNum}`);
            break;
        case '/':
            alert(`${firstNum / secondNum}`);
            break;
    };

    question = prompt('Хотите решить ещё один пример?');
    
};