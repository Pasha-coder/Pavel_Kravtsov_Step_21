let start = 0;
let end = 100;
let num2 = false;

alert(`Задумайте число от ${start} до ${end}`);

while (num2 == false) {
    let num1 = Math.round((start + end) / 2);
    let answer = prompt(`Число <, > or == ${num1}`);
    if (answer === '==') {
        alert('true');
        break;
    } else if (answer === '<'){
        end = num1;
    } else if (answer === '>'){
        start = num1;
    };
};





