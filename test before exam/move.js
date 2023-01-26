function move(string) {
    Str1 = "";
    Str2 = "";
    for (let index = 0; index < string.length; index++) {
        if (string[index] === string[index].toUpperCase()) {
            Str1 += string[index]
        } else Str2 += string[index];
    }
    return console.log(Str1 + Str2);
}

move("hApPy");
move("moveMENT");
move("shOrtCASE");