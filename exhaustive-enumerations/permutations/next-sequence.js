const permutationsHelper = (arr, slate) => {
    if(arr.length === 0) {
        console.log(slate);
        return;                                                                                                                
    }
    for(let i=0; i < arr.length; i++) {
        permutationsHelper([...arr.slice(0, i), ...arr.slice(i+1, arr.length)], `${slate}${arr[i]}`);
    }
}
const permutations = arr => permutationsHelper(arr, '');
permutations(['a','b','c']);
