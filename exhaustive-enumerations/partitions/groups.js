const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
const recursion = (input, i) => {
    if(i === input.length) {
        console.log(input);
        return;
    }
    for (let j=i; j < input.length; j++) {
        swap(input, i, j);
        recursion(input, j+1);
        swap(input, i, j);
    }
}
const recursionWrapper = (input) => {
    recursion(input, 0);
}
const input = ['a','b','c']
recursionWrapper(input);