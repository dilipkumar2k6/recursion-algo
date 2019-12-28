const combination = (n, k) => {
    if(n < k) {
        return 0;
    }
    if(n === 0 || k === 0 || n ===k) {
        return 1;
    }
    return combination(n - 1, k - 1) + combination(n - 1, k);
}
console.log(combination(5, 3));