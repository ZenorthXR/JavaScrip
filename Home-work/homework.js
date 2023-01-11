//Program for checking for missing digit numbers [0-9] in a string
//example: 123456789 has  missing digit is 0 
//example: 53657687691428890 is not missing any digit
//example: 1981023568910 has missing digits 4, 7


const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
    let NoMissing = "has no missing digits";
    let temp = [];
    let count = 0;
    for (let n = 0; n < 10; n++) {
        if (numStr.includes(n)) {
            n++;
        } else { temp[count] = n; count++; }
    }
    switch (numStr) {
        case numStr2: return `${numStr2} ${NoMissing}`;
        case numStr1: return `${numStr} Missing Digit = ${temp}`;
        case numStr3: {
            let op = temp[0] + ', ' + temp[1]
            return `${numStr} Missing Digit = ${op}`;
        }
    }
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));