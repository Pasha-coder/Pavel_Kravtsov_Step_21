let money = +prompt('Введите сумму денег в кошельке');
let choco = +prompt('Введите цену шоколадки');
let amount = Math.floor(money / choco);
let change = money - choco * amount;

alert(`Вы можете купить шоколадок в количестве ${amount} шт. и Ваша сдача составит ${change.toFixed(2)}`);