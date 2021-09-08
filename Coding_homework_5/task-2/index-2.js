let fraction = {
    numerator: -15,
    denominator: 5,
};

function fractionAdd(num1, num2) {
    let object = {
        numerator: num1,
        denominator: num2,
    };

    let divider = fraction.denominator > object.denominator ? fraction.denominator : object.denominator;
    let finalNumerator;
    let finalDenominator;

    while (divider <= fraction.denominator * object.denominator) {
        if (divider % fraction.denominator === 0 && divider % object.denominator === 0) {
            finalDenominator = divider;
            break;
        };
        divider++;
    };

    finalNumerator = (finalDenominator / fraction.denominator * fraction.numerator) + (finalDenominator / object.denominator * object.numerator);

    fraction.numerator = finalNumerator;
    fraction.denominator = finalDenominator;

    return String(fraction.numerator) + '/' + fraction.denominator;
};

function fractionSub(num1, num2) {
      let object = {
        numerator: num1,
        denominator: num2,
    };

    let divider = fraction.denominator > object.denominator ? fraction.denominator : object.denominator;
    let finalNumerator;
    let finalDenominator;

    while (divider <= fraction.denominator * object.denominator) {
        if (divider % fraction.denominator === 0 && divider % object.denominator === 0) {
            finalDenominator = divider;
            break;
        };
        divider++;
    };

    finalNumerator = (finalDenominator / fraction.denominator * fraction.numerator) - (finalDenominator / object.denominator * object.numerator);

    fraction.numerator = finalNumerator;
    fraction.denominator = finalDenominator;

    return String(fraction.numerator) + '/' + fraction.denominator;
}

function fractionMulti(num1, num2) {
    let object = {
        numerator: num1,
        denominator: num2,
    };

    let finalNumerator;
    let finalDenominator;

    finalNumerator = fraction.numerator * object.numerator;
    finalDenominator = fraction.denominator * object.denominator;

    fraction.numerator = finalNumerator;
    fraction.denominator = finalDenominator;

    return String(fraction.numerator) + '/' + fraction.denominator;
};

function fractionDiv(num1, num2) {
    let object = {
        numerator: num1,
        denominator: num2,
    };

    let finalNumerator;
    let finalDenominator;

    finalNumerator = fraction.numerator * object.denominator;
    finalDenominator = fraction.denominator * object.numerator;

    fraction.numerator = finalNumerator;
    fraction.denominator = finalDenominator;

    return String(fraction.numerator) + '/' + fraction.denominator;
};

function fractionReduction(numerator, denominator) {
    for (let least = Math.abs(numerator) < Math.abs(denominator) ? Math.abs(numerator) : Math.abs(denominator); least >= 1; least--) {
        if (numerator % least === 0 && denominator % least === 0) {
            fraction.numerator = numerator / least;
            fraction.denominator = denominator / least;
            break;
        };
    };

    return String(fraction.numerator) + '/' + String(fraction.denominator);
};

/* function fractionCorrector(numerator, denominator) {
    let whole;
    let finalNumerator;
    let finalDenominator;

    whole = Math.floor(numerator / denominator);
    finalNumerator = (numerator - whole * denominator);
    finalDenominator = denominator;

    return String(whole) + ' ' + finalNumerator + ' ' + finalDenominator;
};*/


