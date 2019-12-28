const fact = n => {
    let val = 1;
    for(let i=1; i <= n; i++) {
        val*= i;
    }
    return val;
}
const kthPermutations = (arr, k, result) => {
    if(arr.length === 0) {
        return;
    }
    const n = arr.length;
    const blockSize = fact(n - 1);
    const pIndex = Math.floor(k / blockSize);
    const remaining = k - blockSize * pIndex;
    result.push(arr[pIndex]);
    kthPermutations([...arr.slice(0, pIndex), ...arr.slice(pIndex + 1)], remaining, result);
}
const result = [];
kthPermutations(['a','b','c'], 0, result);
console.log(result);