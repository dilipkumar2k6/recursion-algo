const kSizeCombinationsHelper = (arr, k, i, slate) => {
    if(slate.length === k) {
        console.log(slate);
        return;
    }
    for(let j=i; j < arr.length; j++) {
        // place ith on slate
        slate.push(arr[j]);
        kSizeCombinationsHelper(arr, k, j+1, slate);
        slate.pop(); // restore original slate
    }
}
const kSizeCombinations = (arr, k) => {
    return kSizeCombinationsHelper(arr, k, 0, []);
}
kSizeCombinations(['a','b','c','d','e','f'],3);
