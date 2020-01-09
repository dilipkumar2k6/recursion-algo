
const find_all_well_formed_brackets_helper =  (n, results, i, slate, stack)=> {
    if(i === n) {
        if(stack.length === 0) {
            results.push(slate.join(''))
        }
        return;
    }

    // choose (
    slate.push('(')    
    stack.push('(')
    find_all_well_formed_brackets_helper(n, results, i + 1, slate, stack)
    // restore
    slate.pop();
    stack.pop();
    // choose )  
    slate.push(')') 
    const top = stack[stack.length - 1];
    let popped  = false;
    if(top === '(') {
        stack.pop(); 
        popped = true;
    } else {
        stack.push(')')
    }  
    find_all_well_formed_brackets_helper(n, results, i + 1, slate, stack);
    slate.pop();
    if(popped) {
        stack.push('(');
    } else {
        stack.pop();
    }
}
/*
 * Complete the function below.
 */
function generateParenthesis(n) {
    const results = [];
    find_all_well_formed_brackets_helper(2*n, results, 0, [], [])
    return results;
}
 console.log(find_all_well_formed_brackets(3))
// console.log(isValidBrackets([ ')', '(', ')', ')' ])) // false
// console.log(isValidBrackets([ '(', ')', '(', ')' ])) // true
// console.log(isValidBrackets([ ')', ')', '(', ')' ])) // false
// console.log(isValidBrackets([ ')', ')', ')', ')' ])) // false

