const printAllSubsets = arr => {
    const ans = [];
    const queue = [[0, []]];

    while(queue.length > 0) {
        const size = queue.length;
        for(let j=0; j < size; j++) {
            const [i, slate] = queue.shift();
            // skip for empty set
            if(i === arr.length) {
                ans.push([...slate]);
                continue;
            }
            // add i
            queue.push([i+1, [...slate, arr[i]]]);
            // skip i
            queue.push([i+1, slate])
        }
    }

    return ans;
}

console.log(printAllSubsets(['a','b','c']));