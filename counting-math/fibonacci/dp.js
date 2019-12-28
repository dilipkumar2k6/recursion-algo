const fib = n => {
    const cache = new Array(n + 1).fill(0);
    for(let i=0; i <=n ; i++) {
        if(i === 0 || i === 1) {
            cache[i] = i;
        } else {
            cache[i] = cache[i - 1] + cache[i - 2];
        }
    }
    return cache[n];
}
console.log(fib(5))