const fibonaci = (n) => {
    if (n === 1)
        return 1
    return n - 1 + fibonaci(n - 2);
}
console.log(fibonaci(7))