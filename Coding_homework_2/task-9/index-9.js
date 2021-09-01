let firstAnswer = +prompt('Сколько премий Оскар у трилогии "Властелин колец"? - a) 17; б) 11; в) 8');
let secondAnswer = prompt('Какой художник написал картину "Постоянство памяти" - а) Пикассо; б) Дали; г) Делакруа');
let thirdAnswer = prompt('Как по-русски звучит название государства Монтенегро - а) Нигерия; б) Канада; г) Черногория');

let sum = 0;

if (firstAnswer === 17 && secondAnswer !== 'Дали' && thirdAnswer !== 'Черногория' || firstAnswer !== 17 && secondAnswer === 'Дали' && thirdAnswer !== 'Черногория' || firstAnswer !== 17 && secondAnswer !== 'Дали' && thirdAnswer === 'Черногория') {
    alert(`Вы набрали ${sum + 2} балла`);
} else if (firstAnswer === 17 && secondAnswer === 'Дали' && thirdAnswer !== 'Черногория' || firstAnswer === 17 && secondAnswer !== 'Дали' && thirdAnswer === 'Черногория' || firstAnswer !== 17 && secondAnswer === 'Дали' && thirdAnswer === 'Черногория') {
    alert(`Вы набрали ${sum + 4} балла`);
} else if (firstAnswer === 17 && secondAnswer === 'Дали' && thirdAnswer === 'Черногория') {
    alert(`Вы набрали ${sum + 6} баллов`);
} else {
    alert(`Вы набрали ${sum} баллов`);
}
