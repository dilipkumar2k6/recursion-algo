const permutations = arr => {
    let result = [''];
    for(let i=0; i < arr.length; i++) { // Iterate each element
        const newResult = [];
        const elem = arr[i]; // process current element
        for(let j=0; j < result.length; j++) { // Iterate existing perm
            const perm = result[j];
            for (let k=perm.length; k >=0; k--) { // insert new element on all possible position 
                const newPerm = perm.substring(0, k) + elem + perm.substring(k);
                newResult.push(newPerm);
            }
        }
        result = newResult;
    }
    return result;
}
console.log(permutations(['a','b','c']));