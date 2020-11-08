const permutationsHelper = (arr, n) => {

    // Base case: Single length arr
    if(n === 1) {
        return [arr[n-1]];
    }
    // Remove last element and handover to subordinate to find out permutations
    const prev = permutationsHelper(arr, n - 1); 
    const elem = arr[n -1]; // last element
    const result = [];
    for(const perm of prev) {
        // generate new permutations based on existing
        // elem: c, prev = [[ab,ba]]
        // ab + c = cab, acb, abc
        for(let j=perm.length; j >=0; j--) {
            const newPerm = perm.substring(0, j)+ elem + perm.substring(j);
            result.push(newPerm);
        }
    }
    return result;
}
const permutations = arr => permutationsHelper(arr, arr.length);
console.log(permutations(['a','b','c']))