function greatest(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        return num1;
    };
    if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        return num2;
    };
    if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
        return num3;
    };
    if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
        return num4;
    };
    if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
        return num5;
    };
};

console.log(greatest(1,2,3,4,5));