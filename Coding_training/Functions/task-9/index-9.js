function evenOrOdd(num1, num2, bool) {
    let start = num1 > num2 ? num2 : num1;
    let end = num1 < num2 ? num2 : num1;
    let even = '';
    let odd = '';
    while (start <= end) {
        if (start % 2 === 0) {
            even += start + ', ';
            start++;
        };
        if (start % 2 !== 0) {
            odd += start + ', ';
            start++;
        };
    };
    if (bool === true) {
        return(even);
    };
    if (bool === false) {
        return(odd);
    };
};

console.log(evenOrOdd(2,10,true));