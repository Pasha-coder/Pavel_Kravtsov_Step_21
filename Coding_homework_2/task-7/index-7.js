let sum = +prompt('Введите сумму покупки');

if (sum >= 200 && sum < 300) {
    alert(`Сумма к оплате со скидкой составит ${sum - sum * 3 / 100}`);
} else if (sum >= 300 && sum < 500) {
    alert(`Сумма к оплате со скидкой составит ${sum - sum * 5 / 100}`);
} else if (sum >= 500) {
    alert(`Сумма к оплате со скидкой составит ${sum - sum * 7 / 100}`);
} else {
    alert(`Сумма к оплате составит ${sum}`);
};