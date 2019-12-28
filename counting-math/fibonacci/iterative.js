const fib = n => {
    let a = 0;
    let b = 0;
    let c = 0;
    for(let i=0; i <=n ; i++) {
        if(i === 0) {
            a = 0;
            b = 0;
            c = 0;
        } else if (i === 1) {
            a = 0;
            b = 0;
            c = 1; 
        } else {
            a = b;
            b = c;
            c = a + b;
        }
    }
    return c;
}
console.log(fib(5))