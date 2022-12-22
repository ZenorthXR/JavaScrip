const people = ["Aron" ,"Mel" , "John"];
const one = 1;
const str = "Hello world";
const b = true;
const employee = {
    firstName: "Shinnawat",
    lastName: "Pawasri"
};

function sayHello(person) {
    console.log("Hello " + person.firstName + " " +  person.lastName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);