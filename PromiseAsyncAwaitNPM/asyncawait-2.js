function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout((resolve,ms));
    });
}

async function longRunningOperation() {
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

run();