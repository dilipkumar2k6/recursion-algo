const printBinary = n => {
    let result = ['0','1'];
    for(let i=1; i <n; i++) {
        const newResult = [];
        result.forEach(bin => {
            newResult.push(`${bin}${0}`);
            newResult.push(`${bin}${1}`);
        });
        result = newResult;
    }
    return result;
}

console.log(printBinary(3))