 
/*
 * Complete the function below.
 */
function how_many_BSTs(n) {
    // base case
    if(n ===0 || n === 1) {
        return 1;
    }
    let total = 0;
    for(let i=0; i <n; i++) {
        total+=  how_many_BSTs(i) *  how_many_BSTs(n - 1 - i)
    }
    return total;

}
console.log(how_many_BSTs(3))

