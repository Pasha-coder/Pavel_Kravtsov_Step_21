function factorial(n) {
    console.log(n);
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert(factorial(4));
