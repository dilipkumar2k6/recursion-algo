const increment = (arr, i, carry) => {
    if(i === -1) {
        if(carry !== 0) {
            arr.unshift(carry);
        }
        return;
    }
    const total = arr[i] + carry;
    const value = total % 10;
    const newCarry = Math.floor(total / 10);
    arr[i] = value;
    increment(arr, i -1, newCarry);
}    
const areAll9s = num => {
    for( i = 0; i < num.length; ++i ) {
        if( num[i] != 9 ) {
            return false; 
        }
    }
    return true; 
}

const next_palindrome_helper = num => {
    const n = num.length;
    const mid = Math.floor(n/2);
    let leftSmaller = false;
    // end of left side is always 'mid -1' 
    let i = mid - 1;

    // Beginning of right side depends if n is odd or even
    let j = (n % 2) ? mid + 1 : mid; 
    
    // Skip if already palindrome
    while (i >= 0 && num[i] == num[j]) {
        i--,j++; 
    }

    // if already palindrome or left is smaller than right then middle needs to be incremented
    if ( i < 0 || num[i] < num[j]) {
        leftSmaller = true; 
    }

    // Copy the mirror of left to tight 
    while (i >= 0) { 
        num[j] = num[i]; 
        j++; 
        i--; 
    } 
    // Handle the case where middle digit(s) must be incremented. 
    if (leftSmaller) { 
        const midIndex = (n % 2 === 1) ? mid : mid -1; 
        increment(num, midIndex, 1);
  
        // Add 1 to the rightmost digit of the left side, and also copying mirror of the left side to the right side again
        i = mid - 1; 
        j = (n % 2) ? mid + 1 : mid; 
        while (i >= 0) { 
            num[j++] = num[i--]; // copy mirror to right 
        } 
    }




}
/*
* Complete the function below.
*/
function next_palindrome(n) {
   const str = n + ''; 
   const num = str.split('').map(a => parseInt(a,10));

   if( areAll9s( num) ) { 
        increment(num, num.length - 1, 2)
    } 
    // Input type 2 and 3 
    else { 
        next_palindrome_helper (num);          
    } 
    return parseInt(num.join(''), 10);
}

console.log(next_palindrome(191))