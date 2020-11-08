const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
const shouldSwap = (arr, i, j) => {
    for(let k=i; k < j; k++) {
        if(arr[k] === arr[j]) {
            return false;
        }
    }
    return true;
}
const permutationsHelper = (arr, i) => {
    // If i reach to end then no need to permute
    if(i === arr.length - 1) {
        console.log(arr);
        return;
    }
    for(let j = i; j < arr.length; j++) {
        // proceed further for arr[j] only if it doesn't match with any of the characters after arr[i]
        if(shouldSwap(arr, i, j)){
            swap(arr, i, j);
            permutationsHelper(arr, i + 1);
            // restore array
            swap(arr, j, i);
        }
    }
}

const permutations = arr => permutationsHelper(arr, 0);

permutations(['a','b','b'])