const combinationsHelper = (arr, slate) => {
    if(arr.length === 0) {
        console.log(slate);
        return;
    }
    // choose 0th element
    combinationsHelper(arr.slice(1, arr.length), [...slate, arr[0]]);
    
    // exclude 0th element
    combinationsHelper(arr.slice(1, arr.length), slate);
}
const combinations = n => combinationsHelper(n, []);
combinations(['a','b','c']);