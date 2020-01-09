const stepsCount = (choices, n) => {

    if(n === 0) {
        return 1;
    }
    if(n < 0) {
        return 0;
    }

    let total = 0;
    for(let i=0; i < choices.length; ++i) {
        total += stepsCount(choices, n - [choices[i]]);
    }
    return total;
}
console.log(stepsCount([1,2,3,4], 4))