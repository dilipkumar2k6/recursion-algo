const printAllSubsetsHelper = (arr, i, ans, slate) => {
    // print ans for empty string
    if(i === arr.length) {
        ans.push([...slate]);
        return;
    }
    // choose to apply ith elem
    slate.push(arr[i]);
    printAllSubsetsHelper(arr, i + 1, ans, slate);
    slate.pop();

    // skip to apply ith element
    printAllSubsetsHelper(arr, i + 1, ans, slate);
}
const printAllSubsets = arr => {
    const ans = [];
     printAllSubsetsHelper(arr, 0, ans, []);
    return ans;
}
console.log(printAllSubsets(['a','b','c']));