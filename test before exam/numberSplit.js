// input is 4,10,11,9,
// 0 is no respones cant run if input is 0

function NumberSplit(number) {
    total = [];
    if (number != 0) {
        if (number % 2 === 0) {
            total[0] = number / 2
            total[1] = number / 2
            return console.log(`(${total[0]} + ${total[1]})`);
        } else
            total[0] = number / 2
            total[1] = number / 2
            return console.log(`(${Math.ceil(total[0])} + ${Math.floor(total[1])})`);
    } else return console.log(`your number invalid`);
}

NumberSplit(4);
NumberSplit(10);
NumberSplit(11);
NumberSplit(-9);
NumberSplit(0);
