const generate_all_subsetsHelper = (s, i, results, result) => {

    // reach at the end
    if(i === s.length) {
        results.push(result.join(''));
        return;
    }

    // exclude ith
    generate_all_subsetsHelper(s, i+1, results, result);

    // include ith
    result.push(s[i]);
    generate_all_subsetsHelper(s, i+1, results, result);
    result.pop();
}
/*
 * Complete the function below.
 */
function generate_all_subsets(s) {
    const results = [];
    generate_all_subsetsHelper(s, 0, results, []);
    return results;
}

console.log(generate_all_subsets(''))

