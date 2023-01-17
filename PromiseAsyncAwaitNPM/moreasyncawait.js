function who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("<3");
        }, 200);
    });
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Lurk");
        }, 300);
    });
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("In the shadow");
        }, 500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

console.log('We are looking for!!');
msg(); //Lurks in the shadow <--- after 1 second 
console.log('Hello');