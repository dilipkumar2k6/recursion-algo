const printBinaryHelper = (n, slate, ans) => {
    // base case
    if(n === 0) {
        ans.push(slate);
        return;
    }
    // apply 0
    printBinaryHelper(n -1, slate+'0', ans);
    // apply 1
    printBinaryHelper(n -1, slate+'1', ans);
}
const printBinary = n => { 
    const ans = [];
    printBinaryHelper(n, '', ans); 
    return ans;
};
console.log(printBinary(2));

const printDecimalNumbersHelper = (n, slate, ans) => {
    // base case: When slate is full, add into anser
    if(n === 0) {
        ans.push(slate);
        return;
    }
    // try all possible options for current position
    for (let i=0; i <= 9; i++) {
        printDecimalNumbersHelper(n-1, slate + '' + i, ans);
    }
}
const printDecimalNumbers = (n) => {
    const ans = [];
    printDecimalNumbersHelper(n, '', ans);
    return ans;
}

console.log(printDecimalNumbers(2));