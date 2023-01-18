function promiseTimeout(ms) {
    console.log(`Do somthing`);
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    //logic 
    console.log("Start!!");
    // try take of await and compare
    await promiseTimeout(2000);
    console.log("Stop!!"); //if this line need info form line 12 : line 12 should use 'await' before run this line
}
console.log(`Before run`);
run();
console.log(`After run`);