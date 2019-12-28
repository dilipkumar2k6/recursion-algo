const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
const permutationsHelper = (arr, i) => {
    // If i reach to end then no need to permute
    if(i === arr.length - 1) {
        console.log(arr);
        return;
    }
    for(let j = i; j < arr.length; j++) {
        swap(arr, i, j);
        permutationsHelper(arr, i + 1);
        // restore array
        swap(arr, j, i);
    }
}

const permutations = arr => permutationsHelper(arr, 0);

permutations(['a','b','c'])