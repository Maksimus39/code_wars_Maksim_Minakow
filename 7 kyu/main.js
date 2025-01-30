// Напишите функцию, которая находит сумму всех своих аргументов.

function sum() {
    // return the sum of all arguments given.
    let result = 0
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))