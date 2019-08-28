function stringSplitter(string, separator) {
    if (string.length === 1)
        return (string[0] === separator ? "" : string[0])
    return (string[0] === separator ? "" : string[0]) + stringSplitter(string.slice(1, string.length), separator)
}
console.log(stringSplitter("02/20/2020", '/'));