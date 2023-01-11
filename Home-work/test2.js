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

    let cou1 = 0; let cou2 = 0; let cou3 = 0; let cou4 = 0; let cou5 = 0;
    let cou6 = 0; let cou7 = 0; let cou8 = 0; let cou9 = 0; let cou10 = 0;

    for (let index = 0; index < numStr.length; index++) {
        switch (numStr[index]) {
            case "1": ++cou1; break; //cou 1 
            case "2": ++cou2; break; // 1
            case "3": ++cou3; break; // 1
            case "4": ++cou4; break; // 1
            case "5": ++cou5; break; // 1
            case "6": ++cou6; break; // 1
            case "7": ++cou7; break; // 1
            case "8": ++cou8; break; // 1 
            case "9": ++cou9; break; // 1
            case "0": ++cou10; break; // 0
        }
    }
    if (cou1 == 0) {
        temp[count] = 1; count++;
    }
    if (cou2 == 0) {
        temp[count] = 2; count++;
    }
    if (cou3 == 0) {
        temp[count] = 3; count++;
    }
    if (cou4 == 0) {
        temp[count] = 4; count++;
    }
    if (cou5 == 0) {
        temp[count] = 5; count++;
    }
    if (cou6 == 0) {
        temp[count] = 6; count++;
    }
    if (cou7 == 0) {
        temp[count] = 7; count++;
    }
    if (cou8 == 0) {
        temp[count] = 8; count++;
    }
    if (cou9 == 0) {
        temp[count] = 9; count++;
    }
    if (cou10 == 0) {
        temp[count] = 0; count++;
    }
    switch (numStr) {
        case numStr2: return `${numStr2} ${NoMissing}`;
        case numStr1: return `${numStr} Missing Digit = ${temp}`;
        case numStr3: { 
            let output = temp[0] + ', ' + temp[1]
            return `${numStr} Missing Digit = ${output}`;
        }
    }
}
console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));