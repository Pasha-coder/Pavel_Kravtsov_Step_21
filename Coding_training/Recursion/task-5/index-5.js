let a = '()'

function brackets(n) {
    if (n !== 1) {
        a = '(' + a + ')';
        brackets(--n);
    }
    return a;
}


