const generate_all_expressionsHelper = (s, target, i, results, slate, prev, evaluated) =>{
    if(i === s.length ) {   
        // if(evaluated === target) {
        //     results.push(slate)
        // } 
        if(eval(slate) === target) {
            results.push(slate);
        }
        return;
    }
    for(let j = i  ; j < s.length; j++) {
        const str = s.substring(i, j+1);
        const intVal = parseInt(str, 10);
        if(i === 0) {
            // no ops to initialize slate
            generate_all_expressionsHelper(s, target, j+1, results, slate+str, intVal, intVal);
        } else {
            // apply *
            generate_all_expressionsHelper(s, target, j+1, results, slate+'*'+str, prev * intVal, (evaluated - prev) + (prev * intVal));
            // apply +
            generate_all_expressionsHelper(s, target, j+1, results, slate+'+'+str, intVal, (evaluated - prev) + (prev + intVal));
        }
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

console.log(generate_all_expressions('105',5))

