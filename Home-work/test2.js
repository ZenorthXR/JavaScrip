//Program for checking for missing digit numbers [0-9] in a string
//example: 123456789 has  missing digit is 0 
//example: 53657687691428890 is not missing any digit
//example: 1981023568910 has missing digits 4, 7


const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
    let NoMissing = "has no missing digits";
    let missing = "Missing Digit ="
    let temp = [];
    let count = 0;

    let cou = [0,0,0,0,0,0,0,0,0,0];

    for (let index = 0; index < numStr.length; index++) {
        switch (numStr[index]) {
            case "1": ++cou[1]; break; //cou 1 
            case "2": ++cou[2]; break; // 1
            case "3": ++cou[3]; break; // 1
            case "4": ++cou[4]; break; // 1
            case "5": ++cou[5]; break; // 1
            case "6": ++cou[6]; break; // 1
            case "7": ++cou[7]; break; // 1
            case "8": ++cou[8]; break; // 1 
            case "9": ++cou[9]; break; // 1
            case "0": ++cou[0]; break; // 0
        }
    }
    for (let n = 0 ; n < 10 ; n++) {
        if (cou[n] == 0 ) {
            temp[count] = n;
            count++;
        }
    }
    switch (numStr) {
        case numStr2: return `${numStr2} ${NoMissing}`;
        case numStr1: return `${numStr} ${missing} ${temp}`;
        case numStr3: { 
            let output = temp[0] + ', ' + temp[1]
            return `${numStr} ${missing} ${output}`;
        }
    }
}
console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));