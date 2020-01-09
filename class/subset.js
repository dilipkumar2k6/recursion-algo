const print = (arr, i, subset) => {
    if(i === arr.length) {
        console.log(subset);
        return;
    }
    // exclude
    print(arr, i + 1, subset)

    // include
    subset.push(arr[i]);
    print(arr, i+1, subset );
    subset.pop();
}
print([1,2,3],0,[])