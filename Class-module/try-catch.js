function criticalCode() {
    throw "throwing an excetion";
}

function logError(theException) {
    console.log(theException);
}

//try-catch
try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//throwing in try-catch 
console.log("\n----Throwing in Try-catch----\n");

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//try-catch Finally
console.log("\n----Try-catch Finally----\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("Code that always will run");
}


function hello() {
    console.log("\n----Throwing Exceptions----\n");
}