function removeDups(Str) {
    let NotMatch = [];
    for (let index = 0; index < Str.length; index++) {

        if (!NotMatch.includes(Str[index])) {
            NotMatch.push(Str[index]);
        }
    }
    return NotMatch;
}





console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "Big", "Cat"]));
console.log(removeDups(["Jhon", "Taylor", "Jhon"])); 