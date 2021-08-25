let car = {
    manufacturer: 'Россия',
    model: 'ВАЗ Нива',
    yearOfManufacture: '2008',
    averageSpeed: 90,
};

function showInfo(object) {
    console.log(object);
};

function howLong(object, distance) {
    let time = Math.ceil(distance / object.averageSpeed);
    let stop = 4;
    let count = 0;
    while(time - stop > 0) {
        stop += 4;
        count++;
    };
    return time + count;
}

