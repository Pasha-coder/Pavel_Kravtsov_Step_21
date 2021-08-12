function table(num) {
    for(let multi = 1; multi <= 9; multi++) {
        document.write(`${num} * ${multi} = ${num * multi} <br>`);
    };
};

table(2);
table(3);
table(4);
table(5);
table(6);
table(7);
table(8);
table(9);
