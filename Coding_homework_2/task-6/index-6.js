let usd = +prompt('Введите количество USD');
let converted = prompt('Выберите, в какую валюту вы хотите выполнить перевод - EUR, UAN, AZN');

switch (converted) {
    case 'EUR':
        alert(`${usd * 0.84} евро`)
        break;
    case 'UAN':
        alert(`${usd * 26.95} украинских гривн`)
        break;
    case 'AZN':
        alert(`${usd * 1.70} азербайджанских манатов`)
        break;
    default:
        alert('Выберите одну из предложенных валют');
        break;
};