const printBinary = n => {
    // base case
    if(n === 1) {
        return ['0','1'];
    }
    // get result from previous 
    const prev = printBinary(n-1);
    const result = [];
    for(let i=0; i < prev.length; i++) {
        const bin = prev[i];
        result.push(`${bin}${0}`);
        result.push(`${bin}${1}`);
    }
    return result;
}

console.log(printBinary(3))