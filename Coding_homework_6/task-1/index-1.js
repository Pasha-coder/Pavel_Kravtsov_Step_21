let shoppingList = [
    {product: 'Хлеб', quantity: 1, isBought: false},
    {product: 'Колбаса', quantity: 1, isBought: false},
    {product: 'Масло', quantity: 1, isBought: false},
];

function showShoppingList(array) {
    function sortPurchases(a) {
        if (a.isBought === false) {
            return -1;
        } else if (a.isBought === true) {
            return 1;
        };
    };
    return array.sort(sortPurchases);
};

function addPurchase(array, name, number) {
    let search = array.find(item => item.product === name);
    if (search === undefined) {
        array.push({product: name, quantity: number, isBought: false});
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i].product === name) {
                array[i].quantity += number;
            };
        };
    };
};

function madePurchase(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].product === name) {
            array[i].isBought = true;
        };
    };
};

