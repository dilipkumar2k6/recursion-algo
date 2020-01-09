const check_if_sum_possible_helper = (arr, k, total, i) => {
    // if achieve target
    if(k === total) {
        return true;
    }
    // if reach at the end then return false
    if(i === arr.length) {
        return false;
    }
        // choose i or do not choose i
    return check_if_sum_possible_helper(arr, k, total === null? arr[i] : total + arr[i], i +1) ||  check_if_sum_possible_helper(arr, k, total, i +1);
}
/*
 * Complete the function below.
 */
function check_if_sum_possible(arr, k) {
    return check_if_sum_possible_helper(arr, k, null, 0);
}


console.log(check_if_sum_possible([-5, 8, 2, 11, -8 ],14))
