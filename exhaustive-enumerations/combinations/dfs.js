const combinationsHelper = (arr, i, slate) => {
    if(arr.length === i) {
        console.log(slate);
        return;
    }
    // choose ith element
    slate.push(arr[i]);
    combinationsHelper(arr, i+1, slate);
    slate.pop();

    // exclude ith element
    combinationsHelper(arr, i+1, slate);
}
const combinations = n => combinationsHelper(n, 0, []);
combinations(['a','b','c']);