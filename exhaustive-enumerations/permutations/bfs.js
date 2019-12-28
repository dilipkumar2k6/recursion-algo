const permutations = arr => {
    if(arr.length === 0) {
        return [''];
    }
    // Remove last element and handover to subordinate to find out permutations
    const prev = permutations(arr.slice(0, arr.length - 1)); 
    const elem = arr[arr.length -1]; // last element
    const result = [];
    for(let i=0; i < prev.length; i++) {
        const perm = prev[i];
        // generate new permutations based on existing
        for(let j=perm.length; j >=0; j--) {
            const newPerm = perm.substring(0, j)+ elem + perm.substring(j);
            result.push(newPerm);
        }
    }
    return result;
}
console.log(permutations(['a','b','c']))