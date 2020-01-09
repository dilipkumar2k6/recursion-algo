const processLeftOver = (reg, j) => {
    for(let k=j; k < reg.length; k++) {
        if(reg[k] !== '*') {
            return false;
        }
    }
    return true;
}

const matchPatternHelper = (str, reg, i, j) => {

    // if regex reach at end
    if(j === reg.length) {
        return i === str.length;
    }
    // if input reach at the end
    if(i === str.length ) {
        return processLeftOver(reg, j); // handle left over regex
    }
    // if both match 
    if(str[i] === reg[j]) {
        return matchPatternHelper(str, reg, i+1, j+1);
    }
    // if not * then return false
    if(reg[j] !== '*') {
        return false;
    }
    // handle * by ignoring and choosing
    if(matchPatternHelper(str, reg, i, j+1)) {
        return true;
    }
    return matchPatternHelper(str, reg, i+1, j);
}
const matchPattern = (str, reg) => {
    return matchPatternHelper(str, reg, 0, 0);
}
console.log(matchPattern('abcaaddddde','ab*'))