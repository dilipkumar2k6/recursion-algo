/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    num = "3456237490"
    target = 9191
    const result = [];
    const helper = (i, prevOperand, evaluated, slate)=> {
        // Top down, process at the end
        if(i === num.length) {
            if(evaluated === target) {
                result.push(slate);                
            }
            return;
        }
        // to handle concat, simply run inner loop
        for(let j=i; j < num.length; j++) {
            const str = num.substring(i, j + 1);
            const operand = Number.parseInt(str, 10);
            const newStr = String(operand);
            // skip for 0 as prefix
            if(str.length !== newStr.length) {
                continue;
            }
             
            // for i= 0 skip all operator
            if(i=== 0) {
                helper(j + 1, operand, operand, slate+str);
            } else {
                // apply +
                helper(j + 1, operand, evaluated + operand, slate+'+'+str);
                // apply -
                helper(j + 1, operand * -1, evaluated - operand, slate+'-'+str);
                // apply *
                helper(j + 1, prevOperand * operand, evaluated - prevOperand + prevOperand * operand, slate+'*'+str);
            }
            
        }
    } 
    helper(0, 0, 0, '');
    return result;
};

console.log(addOperators())