function promiseTimeout(ms) {
    console.log(`Do something`);
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    });
}

async function longRunningOperation() {
    console.log(`Doit like banana`);
    //logic
    return 42;
}

async function run() {
    //logic 
    console.log("Start!!");
    await promiseTimeout(2000);
    // try to take await out and see
    const respones = await longRunningOperation();
    console.log(respones);

    console.log("Stop!!");
}
console.log(`before run`);
run();
console.log(`After run`);