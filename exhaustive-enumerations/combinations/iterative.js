const combinations = arr => {
    let result = [[]];
    for(let i=0; i < arr.length; i++) {
        const elem = arr[i];
        const newResult = [];
        // append current elem to set to generate new set
        for(let j=0; j < result.length; j++) {
            const set = result[j];
            // add original set
            newResult.push(set);
            // add elem to existing set to create new combinations
            newResult.push([...set, elem]);
        }
        // update result with new result
        result = newResult;
    }
    return result;
}

console.log(combinations(['a', 'b','c']));