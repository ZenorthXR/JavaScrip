let num1 = '150';
let flot = '1.50';

console.log("********Converting string to integers********");
//Converting string to integer
console.log(parseInt(100));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); // Hexadecimal number 

console.log("********Converting string to float********");
//Converting string to float
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flot));
console.log(parseFloat('ABC'));

console.log("********More Conversion Examples********");
//MOre Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.25'));
console.log(parseInt('1 + 1'));

//Using template Literals 
console.log(parseInt(`${1 + 1}`));

console.log("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flot.toString());
console.log((100).toString());


