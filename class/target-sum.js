const sum = (arr, target, i, s) => {

    if(target === s) {
        return 1;
    }
    // if(target < 0 ) {
    //     return 0;
    // }
    if(i === arr.length) {
        return 0;
    }
    return sum(arr, target, i+1, s  + arr[i])  + sum(arr, target, i+1, s);
}

console.log(sum([5,1,2,3, -2], 3, 0, 0));