const fact = n => {
    let val = 1;
    for(let i=1; i <= n; i++) {
        val*= i;
    }
    return val;
}
const rank = (arr, perm) => {
    if(arr.length === 0) {
        return 0;
    }
    const n = arr.length;
    const blockSize = fact(n - 1);
    const pIndex = arr.indexOf(perm[0]);
    perm.shift();
    arr.splice(pIndex,1)
    return pIndex * blockSize + rank(arr, perm);
}
console.log(rank(['a','b','c'], ['c','b','a']))