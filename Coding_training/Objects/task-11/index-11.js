let coordinates = {
    leftX: 5,
    leftY: 20,
    rightX: 40,
    rightY: 5,
};

function change(shift) {
    console.log(`New coordinates: upper left - ${coordinates.leftX + shift}.${coordinates.leftY + shift},
    \nbottom right - ${coordinates.rightX + shift}.${coordinates.rightY + shift}`);
};

change(5);



