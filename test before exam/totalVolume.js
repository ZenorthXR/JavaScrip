// [4*2*4]+[3*3*3]+[1*1*2]+[2*1*1] = 63 , 10 , 1

function total(arr) {
    let sum = [];
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr === arr1) {
            sum[index] = arr1[index].reduce((accumulator, currentValue) => accumulator * currentValue);
        } else if (arr === arr2) {
            sum[index] = arr2[index].reduce((accumulator, currentValue) => accumulator * currentValue);
        } else if (arr === arr3) {
            sum[index] = arr3[index].reduce((accumulator, currentValue) => accumulator * currentValue);
        }
    }
    for (let index = 0; index < sum.length; index++) {
        total += sum[index];
    }
    return total;
}
const arr1 = [[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]];
const arr2 = [[2, 2, 2], [2, 1, 1]]
const arr3 = [[1, 1, 1]]

console.log(total(arr1));
console.log(total(arr2));
console.log(total(arr3));
