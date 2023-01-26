function digitalClock(sec) {
    let hour; let temp;
    let mins;
    let secs;
    hour = sec / 3600 //5025 / 3600
    temp = Math.floor(hour); //temp = 1
    sec = sec - (3600 * temp); // sec = 5025 - 3600 * 1
    mins = sec / 60; // mins = 1425 / 60
    temp = Math.floor(mins); //temp = 23
    sec = sec - (temp * 60); // sec = 1425 - 1380 
    secs = sec;
    if (hour > 23) {
        return `This time ` +
            (hour > 9 ? `${Math.floor(hour)}` : `0${Math.floor(hour)}`) + `:` +
            (mins > 9 ? `${Math.floor(mins)}` : `0${Math.floor(mins)}`) + `:` +
            (secs > 9 ? `${Math.floor(secs)}` : `0${Math.floor(secs)}`) + ` is a next DAY!!`

    }
    else return `This time is ` +
        (hour > 9 ? `${Math.floor(hour)}` : `0${Math.floor(hour)}`) + `:` +
        (mins > 9 ? `${Math.floor(mins)}` : `0${Math.floor(mins)}`) + `:` +
        (secs > 9 ? `${Math.floor(secs)}` : `0${Math.floor(secs)}`)

}


console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));