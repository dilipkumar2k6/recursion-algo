const printAllSubsetsHelper = (arr, i) => {
    // for empty set
    if(i === arr.length) {
        return [[]];
    }
    // handover rest of elements to child
    const prev = printAllSubsetsHelper(arr, i + 1);

    // As a manager, apply ith element
    const ans = [];
    for (const result of prev) {
        // skip to apply ith element
        ans.push(result);

        // Apply ith element
        ans.push([...result, arr[i]]);
    }
    return ans;
}
const printAllSubsets = arr => {
    return printAllSubsetsHelper(arr, 0);
}
console.log(printAllSubsets(['a','b','c']));