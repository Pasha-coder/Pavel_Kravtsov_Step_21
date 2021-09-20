let receipt = [
    {goods: 'Йогурт', quantity: 1, price: 1.59},
    {goods: 'Печенье', quantity: 1, price: 2.78},
];

function printReceipt(array) {
    return array;
};

function getTotalCost(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i].price;
    };
    return sum;
};

function getTheMostExpensivePurchase(array) {
    let mostExpensive = array[0].price;
    for(let i = 1; i < array.length; i++) {
        mostExpensive = Math.max(mostExpensive, array[i].price);
    };
    return array.find(item => item.price === mostExpensive);
};

function getAverageCost(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i].price;
    };
    return (sum / array.length).toFixed(2);
};





