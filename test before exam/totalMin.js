function sumtwoSmallValue(value) {
    let temp = [];
    temp[0] = value[0];
    let arr = [];
    for (let index = 0; index < value.length; index++) {
        if (temp[0] > value[index]) {
            temp[0] = value[index];
        }
    }
    for (let index = 0; index < value.length; index++) {
        if (!temp.includes(value[index])) {
            arr.push(value[index]);
        }
    }
    temp[1] = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (temp[1] > arr[index]) {
            temp[1] = arr[index];
        }
    }
    return Math.abs(temp[0] + temp[1]);
}


console.log(sumtwoSmallValue([19, 5, 42, 2, 77]));
console.log(sumtwoSmallValue([10, 343445353, 3453445, 345354535453]));
console.log(sumtwoSmallValue([2, 9, 6, -1]));
console.log(sumtwoSmallValue([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
console.log(sumtwoSmallValue([3683, 2902, 3951, -475, 1617, -2385]));