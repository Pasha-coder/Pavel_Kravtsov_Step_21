let distance = +prompt('Введите расстояние между двумя городами в километрах');
let time = +prompt('Введите время, за которое Вы хотите добраться, в часах');

alert(`Вам нужно двигаться со скоростью ${Math.ceil(distance / time)} км/ч`);