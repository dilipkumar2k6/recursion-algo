const combinationsHelper = arr => {
    if(arr.length === 0) {
        return [[]];
    }
    // keep last element and handover remaining to subordinate
    const prev = combinationsHelper(arr.slice(0, arr.length - 1));
    // apply last element on each result returned by subordinate
    const result = [];
    for(let i=0; i < prev.length; i++) {
        const set = prev[i];
        result.push(set); // add original set to result
        result.push([...set, arr[arr.length - 1]]) ; // add last element to set
    }
    return result;
}
console.log(combinationsHelper(['a','b','c']));