const fact = n => {
    let output = 1;

    while(n > 0) {
        output *= n;
        n--;
    }

    return output;
}
console.log(fact(6))