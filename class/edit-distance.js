const editDistanceHelper = (s1, s2, i, j) => {

    // base case when s1 is empty
    if(i === s1.length) {
        return s2.length - j;
    }
    // base case when s2 is empty
    if(j === s2.length) {
        return s1.length - i;
    }
    // if match
    if(s1[i] === s2[j]) {
        return editDistanceHelper(s1, s2, i+1, j+1);
    }

    // get min of three choice 
    return 1 + Math.min(
        editDistanceHelper(s1, s2, i+1, j), // delete
        editDistanceHelper(s1, s2, i, j+1), // insert
        editDistanceHelper(s1, s2, i+1, j+1) // replace
    );
}
const editDistance = (s1, s2) => editDistanceHelper(s1, s2, 0, 0);
console.log(editDistance('ball', 'car'));