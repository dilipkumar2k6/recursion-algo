const subsets = n => {
    if(n === 0) {
        return 1
    }
    return subsets(n - 1) + subsets(n - 1);
}

console.log(subsets(5))