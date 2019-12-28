const power = (n, k) => {
    if(n === 0) {
        return 0; 
    }
    if(k === 1) {
        return n;
    }
    return n * power(n, k - 1);
}
const powerOptimal = (n, k) => {
    if(n === 0) {
        return 0; 
    }
    if(k === 1) {
        return n;
    }
    const mid = Math.floor(k/2);
    const additional = k % 2 === 0 ? 1 : n;
    return additional * powerOptimal(n, mid) * powerOptimal (n, mid); 
}
console.log(powerOptimal(5,4))