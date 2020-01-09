const partitionHelper = (arr, i, slate) => {
    if(arr.length === i) {
        console.log(slate);
        return;
    }
    // choose i to n one by one
    for(let j=i; j<arr.length; j++) {
        combinationsHelper(arr, j+1, [...slate, arr.slice(i, j+1)]); 
    }
}
const combinations = n => combinationsHelper(n, 0, []);
combinations(['a','b','c']);