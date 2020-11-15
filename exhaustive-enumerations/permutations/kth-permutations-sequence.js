const recursion = (nums, k, result, fact) =>{
    const n = nums.length;
    
    // base case: empty nums 
    if(n === 0) {
        return;
    }
    
    // block size after fixing first position 
    const blockSize = fact[n-1];
    
    // Number of blocks before me 
    const beforeMe = Math.floor((k-1)/blockSize);
    
    const myCurrentBlock = beforeMe + 1;
    
    // num on first position and remove from original nums 
    const num = nums.splice(myCurrentBlock-1,1);
    
    // Add into result 
    result.push(num);
    
    // left over k 
    const leftOver = k - beforeMe * blockSize;
    
    // call recursive 
    recursion(nums, leftOver, result, fact);
    
}
/**
 * @param n: n
 * @param k: the k th permutation
 * @return: return the k-th permutation
 */
const getPermutation = function (n, k) {
    const nums = new Array(n).fill(0).map((a,i) => i + 1);
    const result = [];
    
    // pre calculate factorial map for quick calculation
    const fact = new Array(n).fill(1);
    for(i=2; i <= n; i++) {
        fact[i] = fact[i-1] * i;
    }
    
    recursion(nums, k, result, fact);
    return result.join('');
}

