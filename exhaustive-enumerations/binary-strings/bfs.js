const printBinary = n => {
    // base case
    if(n === 0) {
        return [''];
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

console.log(printBinary(2))

const printDecimalNumbers = (n) => {
    // base case of length 0
    if(n === 0) {
        return [''];
    }

    // As a manger, ask child to work for n-1 size of problem
    const prev = printDecimalNumbers(n-1);

    // Manager will do rest of work 
    const result = [];
    for (let i=0; i <= 9; i++) {
        // apply on all result
        for (const r of prev) {
            result.push(r+''+i);
        }
    }
    return result;
}

console.log(printDecimalNumbers(2))