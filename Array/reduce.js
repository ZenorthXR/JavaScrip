const arrayOfnumbers = [1, 2, 3, 4];

const sum = arrayOfnumbers.reduce((accumeulator, currentValue) => {
    return accumeulator + currentValue;
});

console.log(sum); //10