function leftovers(num1, num2) {
    let num3 = Math.floor(num1 / num2);
    let num4 = num1 - num2 * num3;
    return num4;
}

console.log(leftovers(15, 6));