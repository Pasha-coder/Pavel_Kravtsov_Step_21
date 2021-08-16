let res = 0;

function sum(n) {
    let a = n % 10;
    res = res + a;
    console.log(res);
    if (n >= 1) {
        sum(Math.floor(n * 0.1))
    }
}