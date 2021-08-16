let coordinates = {
    leftX: 5,
    leftY: 20,
    rightX: 40,
    rightY: 5,
};

function change(length, width) {
    console.log(`New length: ${(coordinates.rightX - coordinates.leftX) + length}
    \nNew width: ${(coordinates.leftY - coordinates.rightY) + width}`);
};

change(5, 6);

