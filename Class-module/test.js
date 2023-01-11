const limes = [
    'small',//6
    'large', //10
    'large',//10
    'medium',//8
    'small',//6
    'large',//10
    'large',//10
    'medium',//8
];
const wedgesNeeded = 42;
let limeCut = 0;
let totalLimes = 0;
let wedge = 0;
let index = 0;
while (totalLimes <= wedgesNeeded) {
    switch (limes[index]) {
        case 'small': wedge = 6;  break;
        case 'medium': wedge = 8;  break;
        case 'large': wedge = 10;  break;
    }
    limeCut++;
    totalLimes += wedge;
    index++;
}

console.log(limeCut);