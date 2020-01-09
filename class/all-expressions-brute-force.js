const generate_all_expressionsHelper = (s, target, i, results, exp) =>{
    if(i === s.length) {   
        if(eval(exp) === target) {
            results.push(exp)
        }
        return;
    }
    // no ops
    generate_all_expressionsHelper(s, target, i+1, results, exp +s[i],);
    if(i !== 0) {
        // apply *
        generate_all_expressionsHelper(s, target, i+1, results, exp + '*'+s[i]);
        // apply +
        generate_all_expressionsHelper(s, target, i+1, results, exp + '+'+s[i]);
    }

}
/*
 * Complete the function below.
 */
function generate_all_expressions(s, target) {
    const results = [];
    generate_all_expressionsHelper(s, target, 0, results, '', 0, 0);
    return results;
}

console.log(generate_all_expressions('222',24))