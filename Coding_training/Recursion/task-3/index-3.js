function reverse(n) {
    document.write(n ? n % 10 : '');
    if (n > 1) {
        reverse(Math.floor(n % 10));
    };
}