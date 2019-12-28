const permutationsHelper = (arr, k , slate)=> {
    // if slate size is same as k then print
    if(slate.length === k) {
        console.log(slate);
        return; // return as no need to keep building slate more than k length
    }

    // pick element and place on available slate and handover remaining task to subordinate
    for(let i=0; i < arr.length; i++) {
        const elem = arr[i];
        permutationsHelper([...arr.slice(0,i), ...arr.slice(i+1)], k, slate+elem);
    }
}
const permutations = (arr, k) => permutationsHelper(arr, k, '');
permutations(['a','b','c'],3)