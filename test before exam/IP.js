// ipv4 have 4 octe x.x.x.x

const isValidIP = (ip) => {
    let ipArr = ip.split(".");
    if (ipArr.length === 4) {
        for (let item of ipArr) {
            if (parseInt(item) > 255 || parseInt(item) < 0) {
                return false;
            }
            else if (item.length > 1) {
                if (item[0] === "0") {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
};

console.log(isValidIP("1.2.3.4")); //true
console.log(isValidIP("1.2.3"));//flase
console.log(isValidIP("1.2.3.4.5"));//false
console.log(isValidIP("123.45.67.89"));//true
console.log(isValidIP("123.456.78.90"));//flase
console.log(isValidIP("123.045.067.089"));//false