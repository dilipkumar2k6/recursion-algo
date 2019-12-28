const printBinaryHelper = (n, slate) => {
    if(n === 0) {
        console.log(slate);
        return;
    }
    // choose 0
    printBinaryHelper(n -1, slate+'0');
    // choose 1
    printBinaryHelper(n -1, slate+'1');
}
const printBinary = n => printBinaryHelper(n, '');
printBinary(2, '');