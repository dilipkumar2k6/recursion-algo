const decimalStringHelper = (n, slate) => {
    if(n === 0) {
        console.log(slate);
        return;
    }
    for(let i=0; i < 10; i++) {
        decimalStringHelper(n-1, `${slate}${i}`);
    }
}

const decimalString = n => decimalStringHelper(n, '');
decimalString(2)