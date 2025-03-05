function booleanToString(b) {
    return b ?? `${!b}`
}

console.log(booleanToString(true));
console.log(booleanToString(false));