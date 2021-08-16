let coordinates = {
    leftX: 5,
    leftY: 20,
    rightX: 40,
    rightY: 5,
};

function change(shift) {
    console.log(`${coordinates.rightY + shift}, ${coordinates.leftY + shift}`);
};

change(5);



