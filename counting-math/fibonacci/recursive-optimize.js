const fib = (n, b1, b2) => {
    if(n === 0) {
        return b1;
    }
    return fib(n - 1, b2, b1 + b2)
}
console.log(fib(5, 0, 1))