let denominator1 = 5;
let denominator2 = 2;
let numerator1 = 2;
let numeartor2 = 1;


let greatest = denominator1 > denominator2 ? denominator1 : denominator2;
let least = denominator1 < denominator2 ? denominator1 : denominator2;
let divider = greatest;

function division(greatest, least) {
    while (divider <= greatest * least) {
        if (divider % greatest === 0 && divider % least === 0) {
            return divider;
        };
        divider++;
    };
};

console.log(division(greatest, least))