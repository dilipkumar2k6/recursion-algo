const printAllSubsets = arr => {
    const ans = [];
    const stack = [[0,[]]]; // initialize stack with 0th node
    
    while(stack.length > 0) {
        const [i, slate] = stack.pop();

        // if empty input then skip
        if(i === arr.length) {
            ans.push([...slate]);
            continue;
        }

        // choose current element
        stack.push([i+1, [...slate, arr[i]]]);

        // skip current element
        stack.push([i+1, slate]);
    }
    

    return ans;
}

console.log(printAllSubsets(['a','b','c']));