
const permutationsHelper = (arr, slate) => {
    if(arr.length === 0) {
        console.log(slate);
        return;
    }
    // choose element and place on position
    for(let i=0; i < arr.length; i++) {
        // place element
        permutationsHelper([...arr.slice(0, i),...arr.slice(i+1)], slate+arr[i]);
        // skip duplicates
        while(arr[i] === arr[i+1]) {
            i++;
        }
    }

}
const permutations =  arr => permutationsHelper(arr, '');
permutations(['a','b','b'])